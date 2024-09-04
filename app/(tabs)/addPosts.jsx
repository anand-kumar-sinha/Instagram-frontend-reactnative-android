import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Video } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../../atoms/userAtom";
import Alert from "../../components/Alert";
import { storage } from "../../firebase";
import refreshAtom from "../../atoms/refreshAtom";
import allpostsAtom from "../../atoms/allpostsAtom";

const addPosts = () => {
  const [postContent, setPostContent] = useState();
  const [contentType, setContentType] = useState();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState();
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const video = useRef(null);
  const router = useRouter();
  const user = useRecoilValue(userAtom);
  const [posts, setPosts] = useRecoilState(allpostsAtom);
  const [refresh, setRefresh] = useRecoilState(refreshAtom);
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 0.4,
      aspect: [4, 4],
    });

    if (result.assets[0].fileSize > 12000000) {
      setError("File size is too large");
      setAlert(true);
      return;
    }

    if (!result.canceled) {
      setPostContent(result.assets[0].uri);
      if (result.assets[0].type == "video") {
        setContentType("video");
      }
      if (result.assets[0].type == "image") {
        setContentType("image");
      }
    }
  };

  const postHandler = async () => {
    try {
      if (!postContent) {
        setAlert(true);
        setProgress("Please Select Media");
        setMessage("Alert !");
        return;
      }
      setLoading(true);
      setMessage("Uploading...");
      if (postContent) {
        setAlert(true);
        const response = await fetch(postContent);
        const blob = await response.blob();
        const storageRef = ref(
          storage,
          `Post/${user._id}/${Math.round(Math.random() * 10000000)}`
        );
        const uploadTask = uploadBytesResumable(storageRef, blob);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            console.log(error);
            setMessage(error);
            setLoading(false);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              dataSender(downloadURL);
            });
          }
        );
      }
    } catch (error) {
      console.log(error);
      setMessage(error);
      setLoading(false);
    }
  };

  const dataSender = async (postUrl) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      const userData = await AsyncStorage.getItem("user-insta");

      if (token && userData) {
        let value = await JSON.parse(token);
        const config = {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${value}`,
          },
          withCredentials: true,
          sameSite: "None",
        };

        const { data } = await axios.post(
          `https://instagrambackend-one.vercel.app/api/v1/users/createpost`,
          { desc, postUrl, postType: contentType },
          config
        );

        if (data) {
          setLoading(false);
          setDesc("");
          setPostContent("");
          console.log(data);
          setPosts([data?.post, ...posts]);
          setRefresh(!refresh);
          router.push("/home");
        }
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const hideAlertHandler = () => {
    setAlert(false);
    setError("");
  };

  return (
    <ScrollView style={{ paddingTop: 25 }}>
      <View style={styles.header}>
        <Text style={{ color: "#000000", ...styles.headetText }}>New Post</Text>
        <Text
          style={{ color: "#1E90FF", ...styles.headetText }}
          onPress={postHandler}
        >
          Post
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          width: "100%",
          height: windowHeight / 1.5,
        }}
      >
        <Alert
          message={progress ? `${progress.toString()}%` : error}
          hideAlertHandler={hideAlertHandler}
          alert={alert}
          tittle={message}
        />
        {postContent ? (
          contentType == "video" ? (
            <Video
              ref={video}
              source={{
                uri: postContent,
              }}
              style={styles.video}
              isLooping
              resizeMode="cover"
              repeat={true}
              shouldPlay={true}
            />
          ) : (
            <Image style={styles.Img} source={{ uri: postContent }} />
          )
        ) : (
          <View style={styles.nothing}>
            <Text style={{ fontWeight: 500, fontSize: 15 }}>
              Please select an image or video to post.
            </Text>
          </View>
        )}
      </View>
      <View style={{ padding: 10, marginTop: 10 }}>
        <TextInput
          style={styles.txtInp}
          placeholder="Description"
          value={desc}
          onChangeText={(value) => setDesc(value)}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          style={{
            ...styles.btn,
            backgroundColor: "#1E90FF",
            width: (windowWidth * 1) / 2,
          }}
          onPress={pickImage}
        >
          <Text style={{ color: "#ffff", ...styles.btnText }}>Pick image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.btn,
            borderWidth: 1,
            borderColor: "gray",
            width: (windowWidth * 1) / 2.5,
          }}
          onPress={openCamera}
        >
          <Text style={{ color: "#1E90FF", ...styles.btnText }}>
            Open Camera
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default addPosts;

const styles = StyleSheet.create({
  headetText: {
    fontSize: 19,
    fontWeight: 500,
  },
  Img: {
    width: "auto",
    height: "100%",
    marginTop: 20,
    borderRadius: 20,
  },
  btn: {
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "auto",
    height: "100%",
    marginTop: 20,
    borderRadius: 20,
  },
  nothing: {
    width: "auto",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 15,
    fontWeight: 500,
  },
  txtInp: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "100%",
    borderRadius: 10,
  },
});

import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import userAtom from "../../atoms/userAtom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import Alert from "../../components/Alert";

const editProfile = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const [name, setName] = useState(user?.name);
  const [username, setUsername] = useState(user?.username);
  const [bio, setBio] = useState(user?.bio);
  const [taged, setTaged] = useState(user?.taged);
  const [link, setLink] = useState(user?.link);
  const [mobile, setMobile] = useState(user?.mobile);
  const [gender, setGender] = useState(user?.gender);
  const [avatar, setAvatar] = useState(user?.avatar);
  const [loading, setLoading] = useState(false);
  const [picDetect, setPicDetect] = useState(false);
  const [progress, setProgress] = useState(0);
  const [alert, setAlert] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
      setPicDetect(true);
    }
  };

  const editProfile = async () => {
    try {
      setLoading(true);
      if (avatar && picDetect) {
        setAlert(true);
        const response = await fetch(avatar);
        const blob = await response.blob();
        const storageRef = ref(storage, `profile/${user._id}`);
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
            alert(error);
            setLoading(false);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              dataSender(downloadURL);
            });
          }
        );
      } else {
        dataSender();
      }
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  const dataSender = async (imgUrl) => {
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
          `https://instagrambackend-one.vercel.app/api/v1/users/edit-profile`,
          { name, taged, bio, mobile, link, gender, avatar: imgUrl },
          config
        );

        if (data) {
          setUser(data?.user);
          setLoading(false);
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
  };

  return (
    <ScrollView style={{ padding: 20, flex: 1 }}>
      <Alert
        message={`${progress.toString()}%`}
        hideAlertHandler={hideAlertHandler}
        alert={alert}
        tittle="Uploading..."
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Pressable onPress={pickImage}>
          <Image
            source={{
              uri: avatar,
            }}
            style={styles.UserImg}
          />
        </Pressable>
      </View>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={(value) => setName(value)}
        ></TextInput>
        <TextInput
          placeholder="username"
          style={{ ...styles.input, color: "gray" }}
          value={`@${username}`}
          editable={false}
        ></TextInput>
        <TextInput
          placeholder="Tag a person"
          style={styles.input}
          value={taged}
          onChangeText={(value) => setTaged(value)}
        ></TextInput>
        <TextInput
          placeholder="Link"
          style={styles.input}
          value={link}
          onChangeText={(value) => setLink(value)}
        ></TextInput>
        <TextInput
          placeholder="Bio"
          style={styles.input}
          value={bio}
          onChangeText={(value) => setBio(value)}
        ></TextInput>
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          keyboardType="numeric"
          textContentType="telephoneNumber"
          onChangeText={(value) => setMobile(value)}
          value={mobile.toString()}
        ></TextInput>
        <TextInput
          placeholder="Gender"
          style={styles.input}
          value={gender}
          onChangeText={(value) => setGender(value)}
        ></TextInput>
        <TouchableOpacity
          style={styles.btn}
          onPress={editProfile}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <Text style={{ fontSize: 14, color: "white", fontWeight: 500 }}>
              Save
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default editProfile;

const styles = StyleSheet.create({
  UserImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "#e1e1e1",
    color: "black",
    textAlign: "left",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  btn: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

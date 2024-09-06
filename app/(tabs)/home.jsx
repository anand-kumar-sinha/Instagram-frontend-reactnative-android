import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  View
} from "react-native";
import { useRecoilState } from "recoil";
import allpostsAtom from "../../atoms/allpostsAtom";
import allusersAtom from "../../atoms/allUsersAtom";
import userAtom from "../../atoms/userAtom";
import AddStatus from "../../components/AddStatus";
import Alert from "../../components/Alert";
import Post from "../../components/Post";
import StatusBar from "../../components/StatusBar";
import TopHeader from "../../components/TopHeader";
import { storage } from "../../firebase";

const home = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [posts, setPosts] = useRecoilState(allpostsAtom);
  const [users, setUsers] = useRecoilState(allusersAtom);
  const [postHasEnd, setPostHasEnd] = useState(false);
  const [userHasEnd, setUserHasEnd] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [index, setIndex] = useState(1);
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [user, setUser] = useRecoilState(userAtom);
  const [userIndex, setUserIndex] = useState(1);
  const [userLoading, setUserLoading] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [isFocused]);

  useEffect(() => {
    fetchPosts();
  }, [index]);

  useEffect(() => {
    fetchReels();
  }, [userIndex]);

  const fetchReels = async () => {
    try {
      console.log("jd");
      setUserLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.get(
        `https://instagrambackend-one.vercel.app/api/v1/users/status?page=${userIndex}`,
        config
      );

      if (data) {
        setUsers([...users, ...data?.user]);
        if (data?.currentPage === data?.totalPages) {
          setUserHasEnd(true);
        }
        setUserLoading(false);
      }
    } catch (error) {
      console.log(error);
      setUserLoading(false);
    }
  };

  const fetchPosts = async () => {
    console.log("j");
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.get(
        `https://instagrambackend-one.vercel.app/api/v1/users/post?page=${index}`,
        config
      );

      if (data) {
        setPosts([...posts, ...data?.posts]);
        if (data?.currentPage === data?.totalPages) {
          setPostHasEnd(true);
        }
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 70,
  };

  const onViewableItemsChanged = useRef(({ viewableItems, changed }) => {
    if (viewableItems.length > 0) {
      setAutoPlay(viewableItems[0].index);
    }
  }).current;

  //add status
  const statusHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
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
      postHandler(result.assets[0].uri);
    }
  };

  const postHandler = async (statusContent) => {
    try {
      console.log(statusContent);
      if (!statusContent) {
        setAlert(true);
        setProgress("Please Select Media");
        return;
      }
      setLoading(true);
      setMessage("Uploading...");
      if (statusContent) {
        setAlert(true);
        const response = await fetch(statusContent);
        const blob = await response.blob();
        const storageRef = ref(storage, `Status/${user._id}`);
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
          `https://instagrambackend-one.vercel.app/api/v1/users/add-status`,
          { status: postUrl },
          config
        );

        if (data) {
          setLoading(false);
          console.log(data);
          setUser(data?.user);
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
    <View style={{ paddingTop: 15, position: "relative", height: "100%" }}>
      <TopHeader />
      <Alert
        message={progress ? `${progress.toString()}%` : error}
        hideAlertHandler={hideAlertHandler}
        alert={alert}
        tittle={message}
      />
      <View style={{ height: 90, flexDirection: "row", alignItems: "center" }}>
        <Pressable onPress={statusHandler}>
          <AddStatus imgUrl={user?.avatar} id={user?._id} />
        </Pressable>
        {userLoading ? (
          <ActivityIndicator color="#000000" size={20} />
        ) : (
          <FlatList
            data={users}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => (
              <StatusBar user={item} index={index} />
            )}
            onEndReached={() => {
              if (userHasEnd) {
                return;
              }
              setUserIndex(userIndex + 1);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>

      {posts && (
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <Post post={item} index={index} autoPlay={active && autoPlay} />
          )}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          onEndReached={() => {
            if (postHasEnd) {
              return;
            }
            setIndex(index + 1);
          }}
          onEndReachedThreshold={1}
        />
      )}
      {loading && (
        <View
          style={{
            position: "absolute",
            bottom: 10,
            width: "100%",
            height: 40,
          }}
        >
          <ActivityIndicator color="#000000" size={40} />
        </View>
      )}
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  ScrollViewStyle: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    flexDirection: "row",
  },
});

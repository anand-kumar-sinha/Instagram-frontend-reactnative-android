import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";
import Greed from "../../assets/icons/Greed";
import Reels from "../../assets/icons/Reels";
import AddStatus from "../AddStatus";
import StatusBar from "../StatusBar";
import Post from "./Post";
import { router } from "expo-router";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../../atoms/userAtom";
import userpostAtom from "../../atoms/userpostAtom";
import axios from "axios";
import refreshAtom from "../../atoms/refreshAtom";

const UserData = () => {
  const [slider, setSlider] = useState("posts");
  const [userPosts, setUserPosts] = useRecoilState(userpostAtom);
  const refresh = useRecoilValue(refreshAtom)
  const [loading, setLoading] = useState(true);

  const user = useRecoilValue(userAtom);
  const date = new Date(user?.createdAt);

  const formateMonth = date.toDateString().split(" ")[1];
  const formateYear = date.toDateString().split(" ")[3];

  const handleRedirect = async () => {
    const url = user?.link;

    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  useEffect(() =>{
    fetchPosts()
  },[refresh])

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.get(
        `https://instagrambackend-one.vercel.app/api/v1/users/findposts/${user?._id}`,
        config
      );

      if(data){
        setUserPosts(data?.posts)
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.Maincont}>
      {/* image and followers */}
      <View style={styles.firstTab}>
        <AddStatus imgUrl={user?.avatar} id={user?._id} />
        <View style={styles.dataCont}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.data}>14</Text>
            <Text style={styles.label}>Posts</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.data}>664</Text>
            <Text style={styles.label}>Followers</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.data}>120</Text>
            <Text style={styles.label}>Followings</Text>
          </View>
        </View>
      </View>

      {/* name and bio */}
      <View style={styles.secondTab}>
        <Text style={[styles.name, styles.userName]}>{user?.name}</Text>
        {user?.taged && (
          <Text style={[styles.anotheruser, styles.name]}>@{user?.taged}</Text>
        )}
        {user?.bio && (
          <Text style={[styles.bio, styles.name]}>{user?.bio} </Text>
        )}
        <Text style={[styles.bio, styles.name]}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={15}
            color="black"
          />{" "}
          {formateMonth} {formateYear}
        </Text>
        {user?.link && (
          <Pressable onPress={handleRedirect}>
            <Text style={[styles.anotheruser, styles.name]}>{user?.link}</Text>
          </Pressable>
        )}
      </View>

      {/* buttons */}
      <View style={styles.thirdTab}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/editProfile")}
        >
          <Text
            style={{
              ...styles.userName,
              fontSize: 14,
              color: "white",
              fontWeight: 500,
            }}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>

      {/* Hilights */}
      <ScrollView horizontal={true} style={styles.hilights}>
        <StatusBar />
        <StatusBar />
        <StatusBar />
        <StatusBar />
        <StatusBar />
        <StatusBar />
        <AddStatus imgUrl={user?.avatar} id={user?._id} />
      </ScrollView>

      {/*  post reels slider*/}
      <View style={styles.slider}>
        <TouchableOpacity
          style={{
            width: "45%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSlider("posts")}
        >
          <Greed height={30} width={30} color={"#000000"} />
          {slider === "posts" && <View style={styles.Sliderbar}></View>}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "45%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSlider("reels")}
        >
          <Reels height={30} width={30} color={"#000000"} />
          {slider === "reels" && <View style={styles.Sliderbar}></View>}
        </TouchableOpacity>
      </View>

      {/* Post and reels */}
      {
        loading && <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="#000" size={30} />
        </View>
      }
      <View style={{ ...styles.postContainer }}>
        {userPosts?.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </View>
    </ScrollView>
  );
};

export default UserData;

const styles = StyleSheet.create({
  Img: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  ImgCont: {
    width: 80,
    height: 80,
    position: "relative",
  },
  Icon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    borderColor: "white",
    // borderWidth: 1,
    borderRadius: 100,
  },
  Maincont: {
    padding: 10,
    paddingTop: 70,
  },
  firstTab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
  },
  dataCont: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: "70%",
  },
  data: {
    fontSize: 22,
    fontWeight: "bold",
  },
  label: {
    fontSize: 14,
  },
  name: {
    fontSize: 15,
    lineHeight: 23,
  },
  userName: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 16,
  },
  anotheruser: {
    color: "#1F75FE",
  },
  thirdTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    width: "100%",
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 6,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  hilights: {
    paddingVertical: 20,
    flexDirection: "row",
  },
  slider: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  Sliderbar: {
    width: "40%",
    height: 3,
    backgroundColor: "black",
    borderRadius: 10,
    marginHorizontal: 3,
    marginVertical: 5,
  },
  postContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    marginBottom: 80,
    justifyContent: "space-evenly",
    // position: "relative",
  },
});

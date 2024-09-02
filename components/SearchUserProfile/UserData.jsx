import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import Greed from "../../assets/icons/Greed";
import Reels from "../../assets/icons/Reels";
import AddStatus from "../AddStatus";
import StatusBar from "../StatusBar";
import Post from "../User/Post";
import { router } from "expo-router";
import { useRecoilValue } from "recoil";
import userAtom from "../../atoms/userAtom";
import searchuserAtom from "../../atoms/searchuserAtom";

const UserData = () => {
  const [slider, setSlider] = useState("posts");
  const searchuser = useRecoilValue(searchuserAtom);

  const date = new Date(searchuser?.createdAt);

  const formateMonth = date.toDateString().split(" ")[1];
  const formateYear = date.toDateString().split(" ")[3];

  const handleRedirect = async () => {
    const url = searchuser?.link;

    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <ScrollView style={styles.Maincont}>
      {/* image and followers */}
      <View style={styles.firstTab}>
        <AddStatus imgUrl={searchuser?.avatar} id={searchuser?._id}  />
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
        <Text style={[styles.name, styles.userName]}>{searchuser?.name}</Text>
        {searchuser?.taged && (
          <Text style={[styles.anotheruser, styles.name]}>@{searchuser?.taged}</Text>
        )}
        {searchuser?.bio && (
          <Text style={[styles.bio, styles.name]}>{searchuser?.bio} </Text>
        )}
        <Text style={[styles.bio, styles.name]}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={15}
            color="black"
          />{" "}
          {formateMonth} {formateYear}
        </Text>
        {searchuser?.link && (
          <Pressable onPress={handleRedirect}>
            <Text style={[styles.anotheruser, styles.name]}>{searchuser?.link}</Text>
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
            Follow
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
      <View style={{ ...styles.postContainer }}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
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

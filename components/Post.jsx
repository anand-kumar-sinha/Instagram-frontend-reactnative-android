import {
  AntDesign,
  FontAwesome6,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Video } from "expo-av";
import Like from "../assets/icons/Like";
import Comment from "../assets/icons/Comment";
import Message from "../assets/icons/Message";
import FillLike from "../assets/icons/FillLike";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Post = ({ post, autoPlay, index }) => {
  const width = Dimensions.get("window").width;
  const [liked, setLiked] = useState(false);
  const video = useRef(null);
  const [loading, setLoading] = useState(false);
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    setterData();
  }, []);
  const setterData = () => {
    if (post?.likes) {
      let data = post?.likes.indexOf(user?._id);
      if (data !== -1) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  };

  const likeHandler = async () => {
    try {
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

        const { data } = await axios.get(
          `https://instagrambackend-one.vercel.app/api/v1/users/like-unlike/${post?._id}`,
          config
        );

        if (data) {
          console.log(data);
          setLiked(!liked);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.PostContainer}>
      {/* users details */}
      <View style={styles.PostHeader}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: post?.admin?.avatar,
            }}
            style={styles.UserImg}
          />
          <Text style={styles.userName}>{post?.admin?.name}</Text>
        </View>
        <SimpleLineIcons name="options-vertical" size={18} color="black" />
      </View>

      {/* post image */}
      <View style={styles.PostImage}>
        {loading && (
          <View style={{ height: "100%", width: "100%" }}>
            <ActivityIndicator color="#000000" size={30} />
          </View>
        )}
        {post?.postType === "video" ? (
          <Video
            ref={video}
            source={{
              uri: post?.postUrl,
            }}
            style={styles.Img}
            isLooping
            resizeMode="cover"
            repeat={true}
            shouldPlay={index === autoPlay}
            isMuted={false}
            onLoadStart={() => setLoading(true)}
            onLoad={() => setLoading(false)}
          />
        ) : (
          <Image
            source={{
              uri: post?.postUrl,
            }}
            onLoadStart={() => setLoading(true)}
            onLoad={() => setLoading(false)}
            style={styles.Img}
          />
        )}
      </View>
      <View
        style={{
          marginTop: 20,
          marginLeft: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: 700 }}>
          {user?.username}:-{" "}
        </Text>
        <Text>{post?.desc}</Text>
      </View>
      {/* icons for the like etc... */}
      <View style={styles.Bottom}>
        <View style={styles.postActivityCont}>
          <Pressable
            style={{ marginRight: 10, flexDirection: "row" }}
            onPress={likeHandler}
          >
            {liked ? <FillLike /> : <Like color="#000000" />}

            <Text
              style={{
                fontWeight: 500,
                marginLeft: 3,
                color: "red",
                marginTop: 2,
              }}
            >
              {post?.likes?.length === 0 ? "" : post?.likes?.length}
            </Text>
          </Pressable>
          <Pressable style={{ marginRight: 10, flexDirection: "row" }}>
            <Comment color="#000000" />
            <Text style={{ fontWeight: 500, marginLeft: 3, marginTop: 2 }}>
              10
            </Text>
          </Pressable>
          <Pressable style={{ marginRight: 10, flexDirection: "row" }}>
            <Message color="#000000" />
          </Pressable>
        </View>

        <Image
          source={require("../assets/images/save-instagram.png")}
          style={{ width: 24, height: 24 }}
        />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  UserImg: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
  Img: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  userName: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 10,
  },
  PostContainer: {
    backgroundColor: "#F5F5F5",
    elevation: 5,
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  PostHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  PostImage: {
    width: "100%",
    height: 500,
    alignItems: "center",
    marginTop: 5,
    justifyContent: "center",
  },
  Bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    padding: 5,
  },
  postActivityCont: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

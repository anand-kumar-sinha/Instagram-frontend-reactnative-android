import React, { useRef } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Reels from "../../assets/icons/Reels";
import { Video } from "expo-av";

const Post = ({ post }) => {
  const windowWidth = Dimensions.get("window").width;
  const video = useRef(null);
  return (
    <View style={{ position: "relative", marginTop: 5 }}>
      {post && post?.postType === "video" ? (
        <Video
          ref={video}
          source={{
            uri: post?.postUrl,
          }}
          style={{ width: windowWidth / 3.2, height: windowWidth / 3.2 }}
          isLooping
          resizeMode="cover"
          repeat={true}
          shouldPlay={false}
          isMuted={true}
        />
      ) : (
        <Image
          source={{
            uri: post?.postUrl,
          }}
          style={{ width: windowWidth / 3.2, height: windowWidth / 3.2 }}
        />
      )}
      {post && post?.postType === "video" && (
        <View style={{ position: "absolute", top: 3, right: 3 }}>
          <Reels height={25} width={25} color={"#000000"} />
        </View>
      )}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});

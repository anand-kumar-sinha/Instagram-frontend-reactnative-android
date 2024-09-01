import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Button,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import { useRouter } from "expo-router";

const addPosts = () => {
  const [postContent, setPostContent] = useState();
  const [contentType, setContentType] = useState();
  const video = useRef(null);
  const router = useRouter();

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
      quality: 1,
      aspect: [4, 3],
    });

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

  const postHandler = () => {};
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
      <View style={{padding: 10, marginTop: 10}}>
        <TextInput style={styles.txtInp} placeholder="Description"></TextInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          paddingHorizontal: 10
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
    borderColor: 'gray',
    padding: 10,
    width: "100%",
    borderRadius: 10
  }
});

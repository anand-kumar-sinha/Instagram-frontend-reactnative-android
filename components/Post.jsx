import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import {
  SimpleLineIcons,
  AntDesign,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";

const Post = () => {
  const width = Dimensions.get("window").width;

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
              uri: "https://firebasestorage.googleapis.com/v0/b/leafy-beach-388109.appspot.com/o/posts%2F65f7128f9411aee2f29a52a9%2F6?alt=media&token=1be2f019-6c72-45bd-bceb-deef3b100bec",
            }}
            style={styles.UserImg}
          />
          <Text style={styles.userName}>anand</Text>
        </View>
        <SimpleLineIcons name="options-vertical" size={18} color="black" />
      </View>

      {/* post image */}
      <View style={styles.PostImage}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/leafy-beach-388109.appspot.com/o/posts%2F65f7128f9411aee2f29a52a9%2F6?alt=media&token=1be2f019-6c72-45bd-bceb-deef3b100bec",
          }}
          style={styles.Img}
        />
      </View>

      {/* icons for the like etc... */}
      <View style={styles.Bottom}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <AntDesign
            name="hearto"
            size={24}
            color="black"
            style={styles.icon}
          />
          <FontAwesome6
            name="comment"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Ionicons
            name="paper-plane-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
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
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
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
  },
  Bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    padding: 5,
  },
});

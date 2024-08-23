import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const User = () => {
  return (
    <Image
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/leafy-beach-388109.appspot.com/o/posts%2F65f7128f9411aee2f29a52a9%2F6?alt=media&token=1be2f019-6c72-45bd-bceb-deef3b100bec",
      }}
      style={styles.UserImg}
    />
  );
};

export default User;

const styles = StyleSheet.create({
  UserImg: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
});

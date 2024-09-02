import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Back from "../../assets/icons/Back";
import Option from "../../assets/icons/Option";
import { router } from "expo-router";

const UserHeader = ({ username }) => {
  return (
    <View style={styles.headerCont}>
      <Pressable onPress={() => router.back()} style={styles.btnCont}>
        <Back />
      </Pressable>

      <Text style={styles.txt}>{username}</Text>
      <Pressable onPress={() => router.back()} style={styles.btnCont}>
        <Option />
      </Pressable>
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  headerCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    opacity: 0.9,
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    zIndex: 100,
    marginTop: 10,
  },
  txt: {
    fontWeight: "500",
    fontSize: 16,
  },
  btnCont: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  }
});

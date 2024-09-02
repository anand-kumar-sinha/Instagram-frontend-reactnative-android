import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import searchuserAtom from "../atoms/searchuserAtom";

const SearchUserCard = ({ user }) => {
  const [searchuser, setSearchUser] = useRecoilState(searchuserAtom);
  const pressHandler = async () => {
    setSearchUser(user);
    router.push("/searchuserprofile");
  };
  return (
    <Pressable
      style={{ flexDirection: "row", marginTop: 10 }}
      onPress={pressHandler}
    >
      <Image
        source={{
          uri: user?.avatar,
        }}
        style={{ borderRadius: 100, width: 50, height: 50 }}
      />
      <View style={{ marginLeft: 20, justifyContent: "center" }}>
        <Text style={{ fontWeight: "700" }}>{user?.username}</Text>
        <Text style={{ color: "gray" }}>{user?.name}</Text>
      </View>
    </Pressable>
  );
};

export default SearchUserCard;

const styles = StyleSheet.create({});

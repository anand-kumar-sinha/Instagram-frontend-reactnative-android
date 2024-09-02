import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import TopHeader from "../../components/TopHeader";
import Post from "../../components/Post";
import StatusBar from "../../components/StatusBar";
import AddStatus from "../../components/AddStatus";
import { router } from "expo-router";
import { useRecoilValue } from "recoil";
import userAtom from "../../atoms/userAtom";

const home = () => {
  const user = useRecoilValue(userAtom);
  return (
    <ScrollView style={{ paddingTop: 15 }}>
      <TopHeader />
      <ScrollView horizontal={true} style={styles.ScrollViewStyle}>
        <AddStatus imgUrl={user?.avatar} id={user?._id} />
        <StatusBar />
        <StatusBar />
        <StatusBar />
        <StatusBar />
        <StatusBar />
        <StatusBar />
      </ScrollView>

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ScrollView>
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

import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import TopHeader from "../../components/TopHeader";
import Post from "../../components/Post";
import StatusBar from "../../components/StatusBar";
import AddStatus from "../../components/AddStatus";

const index = () => {
  return (
    <ScrollView style={{ paddingTop: 15 }}>
      <TopHeader />
      <ScrollView horizontal={true} style={styles.ScrollViewStyle}>
        <AddStatus />
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

export default index;

const styles = StyleSheet.create({
  ScrollViewStyle: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    flexDirection: "row",
  },
});

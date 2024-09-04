import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Video } from "expo-av";
import { Feather, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

const ReelsCard = ({ active, setActive, item }) => {
  const video = useRef(null);

  const handlePlayPause = () => {
    setActive(!active);
  };
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={{
          uri: item,
        }}
        style={styles.video}
        isLooping
        resizeMode="cover"
        repeat={true}
        shouldPlay={active}
      />
      <View style={styles.optionCont}>
        <TouchableOpacity style={styles.iconStyle}>
          <Feather name="heart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconStyle}>
          <FontAwesome name="comment-o" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconStyle}>
          <SimpleLineIcons name="options-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReelsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    paddingTop: 40,
    padding: 10,
  },
  video: {
    width: "100%",
    height: "95%",
    borderRadius: 10,
  },
  play: {
    position: "absolute",
    bottom: "center",
    right: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  optionCont: {
    position: "absolute",
    right: 0,
    bottom: 30,
    padding: 20,
    borderRadius: 10,
    justifyContent: "space-around",
    height: 280,
  },
  iconStyle: {
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 20,
    borderRadius: 10,
  },
});

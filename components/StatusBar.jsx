import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React, { useRef } from "react";
import { Video } from "expo-av";

const StatusBar = ({user}) => {
  const video = useRef(null)
  return (
    <View
      style={{
        marginBottom: 10,
        paddingHorizontal: 3,
      }}
    >
      <View
        style={{
          width: 70,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.ImgCont}>
        <Video
            ref={video}
            source={{
              uri: user?.status,
            }}
            style={styles.Img}
            isLooping
            resizeMode="cover"
            repeat={true}
            shouldPlay={false}
            isMuted={true}
          />
        </View>

        <Text style={{fontSize: 12, fontWeight: 400}}>{user?.name?.slice(0, 10)}</Text>
      </View>
    </View>
  );
};

export default StatusBar;

const styles = StyleSheet.create({
  Img: { width: 50, height: 50, borderRadius: 100 },
  ImgCont: {
    borderColor: "red",
    borderWidth: 4,
    borderRadius: 100,
    padding: 3,
    position: "relative",
  },
});

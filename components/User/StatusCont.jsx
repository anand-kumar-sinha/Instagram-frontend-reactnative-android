import { Video } from "expo-av";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Close from "../../assets/icons/Close";

const StatusCont = ({ url, setStatusCont, active2 = "", setActive2 = "" }) => {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const video = useRef(null);
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  return (
    <View
      style={{
        width: width * 0.98,
        height: height * 0.8,
        backgroundColor: "rgba(30, 144, 255, 0.8)",
        position: "absolute",
        top: height * 0.12,
        marginLeft: width * 0.01,
        borderRadius: 10,
        zIndex: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          height: "8%",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 500, color: "white" }}>
          Status
        </Text>
        <Pressable
          onPress={() => {
            setStatusCont(false);
            setActive(false);
            if (active2 === false) {
              setActive2(true);
            }
          }}
        >
          <Close color="#ffffff" height={20} width={20} />
        </Pressable>
      </View>
      {loading && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <ActivityIndicator color="#ffffff" size="large" />
        </View>
      )}

      {url && (
        <Video
          ref={video}
          source={{
            uri: url,
          }}
          style={styles.vid}
          isLooping
          resizeMode="cover"
          repeat={true}
          shouldPlay={active}
          isMuted={false}
          onLoadStart={() => setLoading(true)}
          onLoad={() => setLoading(false)}
          onError={(error) => console.log("Error loading video:", error)}
        />
      )}
    </View>
  );
};

export default StatusCont;

const styles = StyleSheet.create({
  vid: {
    width: "100%",
    height: "92%",
    borderRadius: 10,
  },
});

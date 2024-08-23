import { Link, router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { withTiming } from "react-native-reanimated";
const UserSetting = ({ height }) => {
  const handlePress = () => {
    height.value = withTiming(0);
  };
  return (
    <Animated.View style={{ ...styles.cont, height }}>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.bar}
      ></TouchableOpacity>
      <View style={styles.optionsCont}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            router.push("/editProfile");
            handlePress();
          }}
        >
          <Text style={{ fontWeight: 500 }}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            router.push("/setting");
            handlePress();
          }}
        >
          <Text style={{ fontWeight: 500 }}>Security and Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={{ fontWeight: 500 }}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={{ fontWeight: 500, color: "red" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default UserSetting;

const styles = StyleSheet.create({
  cont: {
    width: "100%",
    backgroundColor: "#e1e1e1",
    alignItems: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    zIndex: 100,
    position: "absolute",
    bottom: 0,
  },
  bar: {
    height: 10,
    backgroundColor: "#A9A9A9",
    width: 80,
    margin: 10,
    borderRadius: 10,
  },
  optionsCont: {
    width: "100%",
    padding: 10,
  },
  option: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#C0C0C0",
    marginBottom: 10,
  },
});

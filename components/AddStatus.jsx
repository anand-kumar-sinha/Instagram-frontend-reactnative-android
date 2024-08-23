import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AddStatus = () => {
  return (
    <View style={styles.imgCont}>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={styles.img}
      />
      <MaterialCommunityIcons
        name="plus-circle"
        size={24}
        color="#1F75FE"
        style={styles.icon}
      />
    </View>
  );
};

export default AddStatus;

const styles = StyleSheet.create({
    img: {
        width: 80,
        height: 80,
        borderRadius: 100,
      },
      imgCont: {
        width: 80,
        height: 80,
        position: "relative",
        // marginHorizontal: 5,
      },
      icon: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "white",
        borderColor: "white",
        // borderWidth: 1,
        borderRadius: 100,
      },
});

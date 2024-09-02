import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";

const AddStatus = ({ imgUrl, id }) => {
  const user = useRecoilValue(userAtom);
  return (
    <View style={styles.imgCont}>
      <Image source={{ uri: imgUrl }} style={styles.img} />
      {user?._id === id ? (
        <MaterialCommunityIcons
          name="plus-circle"
          size={24}
          color="#1F75FE"
          style={styles.icon}
        />
      ) : (
        ""
      )}
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

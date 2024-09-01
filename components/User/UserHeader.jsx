import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withSpring, withTiming } from "react-native-reanimated";
import AddPost from "../../assets/icons/AddPost";
import Menu from "../../assets/icons/Menu";
import { useRecoilValue } from "recoil";
import userAtom from "../../atoms/userAtom";
const UserHeader = ({ height }) => {
  const handlePress = () => {
    if (height.value > 0) {
      height.value = withTiming(0);
      return;
    }
    height.value = withSpring(height.value + 500);
  };

  const user = useRecoilValue(userAtom)
  return (
    <View style={styles.headerCont}>
      <Text style={styles.logoName}>{user?.username}</Text>
      <View style={styles.headerIcon}>
        <AddPost height={25} width={25} color={"#000000"} />
        <TouchableOpacity onPress={handlePress}>
          <Menu height={25} width={25} color={"#000000"} />
        </TouchableOpacity>
      </View>
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
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    opacity: 0.9,
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    zIndex: 100,
    marginTop: 10
  },
  logoName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 100,
  },
});

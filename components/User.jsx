import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import userAtom from '../atoms/userAtom'

const User = () => {
  const user = useRecoilValue(userAtom)
  return (
    <Image
      source={{
        uri: user?.avatar,
      }}
      style={styles.UserImg}
    />
  );
};

export default User;

const styles = StyleSheet.create({
  UserImg: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
});

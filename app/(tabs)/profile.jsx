import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import UserHeader from "../../components/User/UserHeader";
import UserData from "../../components/User/UserData";
import UserSetting from "../../components/User/UserSetting";
import Animated, { useSharedValue } from "react-native-reanimated";

const profile = () => {
  const height = useSharedValue(0);
  const [option, setOption] = useState(false);
  return (
    <View style={{ paddingTop: 10 }}>
      <UserHeader height={height} option={option} setOption={setOption} />
      <UserData />
      {!option ? '': <UserSetting height={height} setOption={setOption} />}
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});

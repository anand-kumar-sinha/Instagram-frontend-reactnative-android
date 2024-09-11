import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import UserHeader from "../../components/User/UserHeader";
import UserData from "../../components/User/UserData";
import UserSetting from "../../components/User/UserSetting";
import Animated, { useSharedValue } from "react-native-reanimated";
import StatusCont from "../../components/User/StatusCont";
import { useRecoilValue } from "recoil";
import userAtom from "../../atoms/userAtom";

const profile = () => {
  const height = useSharedValue(0);
  const [option, setOption] = useState(false);
  const [statusCont, setStatusCont] = useState(false);
  const user = useRecoilValue(userAtom);
  return (
    <View style={{ paddingTop: 30 }}>
      <UserHeader height={height} option={option} setOption={setOption} />
      <UserData setStatusCont={setStatusCont} />
      {statusCont && (
        <StatusCont url={user?.status} setStatusCont={setStatusCont} />
      )}
      {!option ? "" : <UserSetting height={height} setOption={setOption} />}
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});

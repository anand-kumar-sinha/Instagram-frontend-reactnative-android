import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router, useRootNavigationState } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useRecoilState } from "recoil";
import FlashLogo from "../assets/icons/FlashLogo";
import userAtom from "../atoms/userAtom";

const index = () => {
  const [ren, setRen] = useState(false);
  const [user, setUser] = useRecoilState(userAtom);
  const fetchUser = async () => {
    const token = await AsyncStorage.getItem("token");
    const userData = await AsyncStorage.getItem("user-insta");

    if (token && userData) {
      let value = await JSON.parse(token);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${value}`,
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.get(
        `https://instagrambackend-one.vercel.app/api/v1/users/me`,
        config
      );

      if (data) {
        setUser(data?.user);
      }
      router.push("/home");
    } else {
      router.push("/login");
    }
  };

  const rootNavigationState = useRootNavigationState();

  const CheckNavLoaded = () => {
    if (rootNavigationState?.key) {
      fetchUser();
    } else {
      setRen(!ren);
    }
  };

  useEffect(() => {
    CheckNavLoaded();
  }, [ren]);
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", height: "100%" }}
    >
      <FlashLogo />
      {/* <ActivityIndicator size="80px" color="#3797EF" /> */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});

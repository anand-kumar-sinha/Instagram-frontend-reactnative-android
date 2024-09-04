import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { RecoilRoot } from "recoil";


const _layout = () => {
  return (
    <RecoilRoot>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(userSetting)" options={{ headerShown: false }} />
          <Stack.Screen name="(searchuserprofile)" options={{ headerShown: false }} />
        </Stack>
    </RecoilRoot>
  );
};

export default _layout;

const styles = StyleSheet.create({});

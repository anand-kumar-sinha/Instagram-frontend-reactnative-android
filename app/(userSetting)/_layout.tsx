import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="setting"
        options={{
          headerTitle: "Setting and Privacy",
        }}
      />
      <Stack.Screen
        name="editProfile"
        options={{
          headerTitle: "Edit Profile",
        }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});

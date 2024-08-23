import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import User from "../../components/User";
import Home from "../../assets/icons/Home";
import HomeSelect from "../../assets/icons/HomeSelect";
import Search from "../../assets/icons/Search";
import SearchSelect from "../../assets/icons/SearchSelect";
import AddPost from "../../assets/icons/AddPost";
import Reels from "../../assets/icons/Reels";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1E90FF",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        tabBarStyle: {
          backgroundColor: "white",
          height: 60,
        },
      }}
    >
      {/* Home screen */}
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeSelect height={25} width={25} color={"#1E90FF"} />
            ) : (
              <Home height={25} width={25} color={"#000000"} />
            ),
        }}
      />

      {/* search sreen */}
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SearchSelect height={25} width={25} color={"#1E90FF"} />
            ) : (
              <Search height={25} width={25} color={"#000000"} />
            ),
        }}
      />

      {/* add posts */}
      <Tabs.Screen
        name="addPosts"
        options={{
          tabBarLabel: "Add Post",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AddPost height={25} width={25} color={"#1E90FF"} />
            ) : (
              <AddPost height={25} width={25} color={"#000000"} />
            ),
        }}
      />

      {/* reels */}
      <Tabs.Screen
        name="reels"
        options={{
          tabBarLabel: "Reels",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Reels height={25} width={25} color={"#1E90FF"} />
            ) : (
              <Reels height={25} width={25} color={"#000000"} />
            ),
        }}
      />

      {/* profile */}
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: () => <User />,
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});

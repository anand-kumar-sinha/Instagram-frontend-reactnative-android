import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Post from "../../components/User/Post";

const search = () => {
  return (
    <View style={{ paddingTop: 45, flex: 1, height: "100%" }}>
      <View style={{ padding: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#DCDCDC",

            borderRadius: 10,
          }}
        >
          <TextInput placeholder="Search" style={{ padding: 8 }}></TextInput>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default search;

const styles = StyleSheet.create({});

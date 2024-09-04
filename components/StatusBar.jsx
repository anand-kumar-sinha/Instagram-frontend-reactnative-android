import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StatusBar = () => {
  return (
    <View
      style={{
        marginBottom: 10,
        paddingHorizontal: 3,
      }}
    >
      <View
        style={{
          width: 70,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.ImgCont}>
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={styles.Img}
          />
        </View>

        <Text style={styles.Name}>Name</Text>
      </View>
    </View>
  );
};

export default StatusBar;

const styles = StyleSheet.create({
  Img: { width: 50, height: 50, borderRadius: 100 },
  Name: { fontWeight: "bold" },
  ImgCont: {
    borderColor: "red",
    borderWidth: 4,
    borderRadius: 100,
    padding: 3,
    position: "relative",
  },
});

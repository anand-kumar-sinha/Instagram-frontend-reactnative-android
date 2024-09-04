import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import { Feather, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import ReelsCard from "../../components/ReelsCard";

const Reels = () => {
  const data = [
    "https://firebasestorage.googleapis.com/v0/b/leafy-beach-388109.appspot.com/o/status%2F65edb6f18a79f4b2ed9a3596?alt=media&token=68bb27ee-0819-49c3-b28a-27ae6d27af64",
    "https://firebasestorage.googleapis.com/v0/b/leafy-beach-388109.appspot.com/o/status%2F65f26ed9b217bef62e0ef4bc?alt=media&token=de287335-ae1e-47c7-8749-062ab9956625",
    "https://firebasestorage.googleapis.com/v0/b/leafy-beach-388109.appspot.com/o/status%2F65f7b588959fe75c3c04d81d?alt=media&token=0d9017cb-2c03-4aed-8376-a50578acb7c1",
  ];

  const [active, setActive] = useState(0)

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.txt}>Reels</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Carousel
          vertical={true}
          width={width}
          height={height - 100}
          data={data}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => setActive(index)}
          renderItem={({ index, item }) => (
            <ReelsCard key={index} item={item} active={index === active} setActive={setActive}/>
          )}
          pagingEnabled={true}
          loop={false}
        />
      </View>
    </>
  );
};

export default Reels;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    borderRadius: 10,
    padding: 10,
    paddingTop: 25
  },
  txt: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 20,
  },
});

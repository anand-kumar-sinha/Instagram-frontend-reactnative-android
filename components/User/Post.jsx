import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Reels from "../../assets/icons/Reels";

const Post = () => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={{position: 'relative',}}>
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/leafy-beach-388109.appspot.com/o/posts%2F65f7128f9411aee2f29a52a9%2F6?alt=media&token=1be2f019-6c72-45bd-bceb-deef3b100bec",
        }}
        style={{width : windowWidth /3.2, height: windowWidth /3.2 }}
      />
      <View style={{position: 'absolute', top: 3, right: 3}}>
        <Reels height={25} width={25} color={"#000000"}/>
      </View>
      
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
});

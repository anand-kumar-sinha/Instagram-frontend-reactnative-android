import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SearchUserCard = ({user}) => {
  return (
    <Pressable style={{ flexDirection: "row", marginTop: 10,}}>
      <Image
        source={{
          uri: user?.avatar,
        }}
        style={{ borderRadius: 100, width: 50, height: 50 }}
      />
      <View style={{marginLeft: 20, justifyContent: 'center'}}>
        <Text style={{fontWeight: '700'}}>{user?.username}</Text>
        <Text style={{color: 'gray'}}>{user?.name}</Text>
      </View>
    </Pressable>
  );
};

export default SearchUserCard;

const styles = StyleSheet.create({});

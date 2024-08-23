import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const TopHeader = () => {
  return (
    <View style={styles.headerCont}>
      <Text style={styles.logoName}>Instagram</Text>
      <View style={styles.headerIcon}>
      <AntDesign name="heart" size={24} color="black" />
      <FontAwesome5 name="facebook-messenger" size={24} color="black" />
      </View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
    headerCont:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        // elevation: 1,
    },
    logoName: {
      fontSize: 24,
      fontWeight: "bold",
    },
    headerIcon:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 100,
    }
  
});

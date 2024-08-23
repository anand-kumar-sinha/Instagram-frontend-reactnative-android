import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const setting = () => {
  return (
    <ScrollView style={{ padding: 20, flex: 1 }}>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <TextInput placeholder="username" style={styles.input}></TextInput>
        <TextInput placeholder="email" style={styles.input}></TextInput>
        <TextInput placeholder="mobile" style={styles.input}></TextInput>
        <TextInput placeholder="password" secureTextEntry style={styles.input}></TextInput>
        <TextInput placeholder="confirm password" secureTextEntry style={styles.input}></TextInput>
        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize: 14, color: 'white', fontWeight: 500}}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default setting
const styles = StyleSheet.create({
  UserImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "#e1e1e1",
    color: "black",
    textAlign: "left",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  btn: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
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

const editProfile = () => {
  return (
    <ScrollView style={{ padding: 20, flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/leafy-beach-388109.appspot.com/o/posts%2F65f7128f9411aee2f29a52a9%2F6?alt=media&token=1be2f019-6c72-45bd-bceb-deef3b100bec",
          }}
          style={styles.UserImg}
        />
      </View>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <TextInput placeholder="Name" style={styles.input}></TextInput>
        <TextInput placeholder="username" style={styles.input}></TextInput>
        <TextInput placeholder="Tag a person" style={styles.input}></TextInput>
        <TextInput placeholder="Link" style={styles.input}></TextInput>
        <TextInput placeholder="Bio" style={styles.input}></TextInput>
        <TextInput placeholder="Gender" style={styles.input}></TextInput>
        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize: 14, color: 'white', fontWeight: 500}}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default editProfile;

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

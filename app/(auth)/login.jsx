import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import InstaLogo from "../../assets/icons/InstaLogo";
import { Link, router } from "expo-router";
import axios from "axios";
import userAtom from "../../atoms/userAtom";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useRecoilState(userAtom);
  const windowHeight = Dimensions.get("window").height;

  const loginHandler = async () => {
    try {
      if(!username || !password){
        alert('Please enter username or password')
        return;
      }

      if(username.indexOf('@') !== -1){
        alert('Invalid username format')
        return;
      }
      setLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.post(
        "https://instagrambackend-one.vercel.app/api/v1/users/login",
        { username, password },
        config
      );
      if (data) {
        await AsyncStorage.setItem("token", JSON.stringify(data?.data?.token));
        await AsyncStorage.setItem(
          "user-insta",
          JSON.stringify(data?.data?.user)
        );
        setUser(data?.data?.user);
        router.push("/home");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      alert('Invalid credentials')
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        height: windowHeight / 2,
        marginVertical: windowHeight / 4,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InstaLogo />
      <View style={{ width: "100%", padding: 20 }}>
        <TextInput
          style={styles.txtInpt}
          placeholder="Username"
          placeholderTextColor="#A9A9A9"
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
        <TextInput
          style={styles.txtInpt}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <Text style={styles.forText}>Forgot Password?</Text>
        <Pressable style={styles.btn} onPress={loginHandler}>
          {loading ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <Text style={styles.btnText}>Login</Text>
          )}
        </Pressable>
        <View style={styles.dividerCont}>
          <View style={styles.divider}></View>
          <Text style={styles.dviderTxt}> OR </Text>
          <View style={styles.divider}></View>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ ...styles.dviderTxt }}>
          Don't have an account?
          <Link href={"/signup"}>
            <Text style={styles.forText}>Sign up</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  txtInpt: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e1e1e1",
    marginTop: 20,
    paddingLeft: 10,
    padding: 7,
    borderRadius: 7,
  },
  forText: {
    textAlign: "right",
    color: "#3797EF",
    fontSize: 12,
  },
  btn: {
    backgroundColor: "#3797EF",
    padding: 7,
    marginTop: 30,
    borderRadius: 7,
  },
  btnText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },
  dividerCont: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
  },
  divider: {
    width: "40%",
    height: 1,
    backgroundColor: "#e1e1e1",
  },
  dviderTxt: {
    fontSize: 12,
    color: "#A9A9A9",
  },
});

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
import { useRecoilValue, useSetRecoilState } from "recoil";
import InstaLogo from "../../assets/icons/InstaLogo";
import { Link, router } from "expo-router";
import userAtom from "../../atoms/userAtom";
import Alert from "../../components/Alert";
import axios from "axios";

const signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [message, setMesage] = useState("");
  const windowHeight = Dimensions.get("window").height;

  const signupHandler = async () => {
    try {
      if (!email || !username || !name || !password) {
        setMesage("Please Enter All Details");
        setAlert(true);
        return;
      }
      setLoading(true);

      console.log(name, email, password, username);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.post(
        "https://instagrambackend-one.vercel.app/api/v1/users/register",
        { name, email, password, username },
        config
      );
      if (data) {
        router.push("/login");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setMesage("User Registration Failed or Already Exists");
      setAlert(true);
      setLoading(false);
    }
  };

  const hideAlertHandler = () => {
    setAlert(false);
    setMesage("");
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
      <Alert
        alert={alert}
        hideAlertHandler={hideAlertHandler}
        message={message}
        loading={false}
      />
      <InstaLogo />
      <View style={{ width: "100%", padding: 20 }}>
        <TextInput
          style={styles.txtInpt}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.txtInpt}
          placeholder="Username"
          placeholderTextColor="#A9A9A9"
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
        <TextInput
          style={styles.txtInpt}
          placeholder="Name"
          placeholderTextColor="#A9A9A9"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={styles.txtInpt}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <Pressable style={styles.btn} onPress={signupHandler}>
          <Text style={styles.btnText}>
            {loading ? <ActivityIndicator color="#ffffff" /> : "Signup"}
          </Text>
        </Pressable>
        <View style={styles.dividerCont}>
          <View style={styles.divider}></View>
          <Text style={styles.dviderTxt}> OR </Text>
          <View style={styles.divider}></View>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ ...styles.dviderTxt }}>
          Already have an account?
          <Link href={"/login"}>
            <Text style={styles.forText}>Log In</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default signup;

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

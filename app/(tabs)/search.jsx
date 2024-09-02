import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Post from "../../components/User/Post";
import SearchUserCard from "../../components/SearchUserCard";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        setIsTyping(false);
        performSearch(searchQuery);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isTyping, searchQuery]);

  const handleTextChange = (text) => {
    setSearchQuery(text);
    setIsTyping(true);
  };

  const performSearch = async (query) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.get(
        `https://instagrambackend-one.vercel.app/api/v1/users/search/${query}`,
        config
      );

      if (data) {
        console.log(data?.user);
        setSearchResult(data?.user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ paddingTop: 45, flex: 1, height: 1000 }}>
      <View style={{ padding: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#DCDCDC",
            borderRadius: 10,
          }}
        >
          <TextInput
            placeholder="Search"
            style={{ padding: 8 }}
            value={searchQuery}
            onChangeText={(data) => handleTextChange(data)}
          ></TextInput>
        </TouchableOpacity>
        <ScrollView style={{ marginBottom: 35 }}>
          {searchResult && searchResult.map((item, index) => <SearchUserCard key={index} user={item}/>)}

        </ScrollView>
      </View>
    </View>
  );
};

export default search;

const styles = StyleSheet.create({});

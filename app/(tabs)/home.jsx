import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../../atoms/userAtom";
import AddStatus from "../../components/AddStatus";
import Post from "../../components/Post";
import StatusBar from "../../components/StatusBar";
import TopHeader from "../../components/TopHeader";
import allpostsAtom from "../../atoms/allpostsAtom";

const home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useRecoilState(allpostsAtom);
  const [autoPlay, setAutoPlay] = useState(false);
  const user = useRecoilValue(userAtom);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, [index]);

  const fetchPosts = async () => {
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
        `https://instagrambackend-one.vercel.app/api/v1/users/post?page=${index}`,
        config
      );

      if (data) {
        setPosts([...posts, ...data?.posts]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 70,
  };

  const onViewableItemsChanged = useRef(({ viewableItems, changed }) => {
    if (viewableItems.length > 0) {
      setAutoPlay(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={{ paddingTop: 15, position: "relative", height: "100%" }}>
      <TopHeader />
      <View style={{ height: 90 }}>
        <ScrollView horizontal={true} style={styles.ScrollViewStyle}>
          <AddStatus imgUrl={user?.avatar} id={user?._id} />
          <StatusBar />
          <StatusBar />
          <StatusBar />
          <StatusBar />
          <StatusBar />
          <StatusBar />
        </ScrollView>
      </View>

      {posts && (
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <Post post={item} index={index} autoPlay={autoPlay} />
          )}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          onEndReached={() => setIndex(index + 1)}
          onEndReachedThreshold={1}
        />
      )}
      {loading && (
        <View style={{ position: "absolute", bottom: 10, width: "100%", height: 40 }}>
          <ActivityIndicator color="#000000" size={40} />
        </View>
      )}
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  ScrollViewStyle: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    flexDirection: "row",
  },
});

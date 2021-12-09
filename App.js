import { StatusBar } from "expo-status-bar";
// import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Books from "./components/books.js";
import ReactNative, { Component } from "react-native";
import React from "react";
import { Router, Route, Scene } from "react-native-router-flux";
import BookList from "./components/books.js";

export default function App() {
  return (
    <Router>
      <Scene>
        <Route path="/" component={BookList} />
      </Scene>
    </Router>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text>Hello World!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

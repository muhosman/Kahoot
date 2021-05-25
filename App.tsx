import React, { Component, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationArchitect from "./src/navigation/NavigationArchitect";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUFEyyOdBVZFRE45OKdIzuUh4yaFx72_I",
  authDomain: "kahootproject-7036a.firebaseapp.com",
  projectId: "kahootproject-7036a",
  storageBucket: "kahootproject-7036a.appspot.com",
  messagingSenderId: "737570003888",
  appId: "1:737570003888:web:f55cc850e0f2eb36991475",
};

function App() {
  useEffect(() => {
    console.log("firebase useEffect");
    firebase.initializeApp(firebaseConfig);
  }, []);

  return <NavigationArchitect />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import LottieView from "lottie-react-native";

const App = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  function controlEmailPassword(
    email: string,
    password: string,
    nickname: string
  ) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (regex.test(email) === false) {
      console.log("Email is not proper!");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log("User account created & signed in!");
          firebase.auth().signOut;
          firebase.
          firestore()
          .collection('Users')
          .add({
            points:0,
            email:email,
            nickname:nickname,
          });
          navigation.navigate("Category");
        });
      

    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#dff9fb" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: "#dff9fb" }}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              position: "absolute",
              padding: 40,
            }}
          >
            <Text
              style={{
                fontFamily: "sans-serif-condensed",
                fontWeight: "bold",
              }}
             // onPress={navigation.navigate("Welcome")}
            >
              Cancel
            </Text>
          </View>
          <View style={styles.registerBox}>
            <LottieView
              style={styles.Lottie}
              source={require("../assets/lottie/shapesbackground.json")}
              autoPlay
            />
            <View>
              <Text
                style={{
                  alignSelf: "center",
                  marginTop: 20,
                  padding: 20,
                  fontFamily: "sans-serif-condensed",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Register
              </Text>
              <TextInput
                style={{ ...styles.input }}
                onChangeText={setEmail}
                placeholder="e-mail"
                value={email}
              />
              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                secureTextEntry={true}
                placeholder="password"
                value={password}
              />
              <TextInput
                style={styles.input}
                onChangeText={setNickname}
                placeholder="nickname"
                value={nickname}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => controlEmailPassword(email, password, nickname)}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif-condensed",
                    fontWeight: "bold",
                  }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    alignSelf: "center",
    width: 250,
    height: 40,
    borderRadius: 30,
    marginVertical: 10,
    borderWidth: 1,
    textAlign: "center",
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
  },
  registerBox: {
    alignSelf: "center",
    marginTop: 200,
    width: 350,
    height: 350,
    backgroundColor: "white",
    borderRadius: 80,
  },
  button: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#cd84f1",
    padding: 10,
    width: 250,
    height: 40,
    borderTopEndRadius: 25,
    borderBottomStartRadius: 25,
    marginTop: 10,
  },
  Lottie: {
    flex: 1,
    alignItems: "center",
  },
});

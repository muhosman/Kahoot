import React, { useState, useRef } from "react";
import {
  View,
  Animated,
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

  function controlEmailPassword(email: string, password: string) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (reg.test(email) === false) {
      console.log("Email is not proper!");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log("User account created & signed in!");
          firebase
            .firestore()
            .collection("Users")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((documentSnapshot) => {
                if (documentSnapshot.data().email == email) {
                  setNickname(documentSnapshot.data().nickname);
                }
              });
            });
          navigation.navigate("Category", { nickname: nickname });
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
              onPress={navigation.navigate("Welcome")}
            >
              Cancel
            </Text>
            <Text
              style={{
                marginLeft: 220,
                fontFamily: "sans-serif-condensed",
                fontWeight: "bold",
              }}
            >
              Sign up
            </Text>
          </View>
          <View style={styles.loginBox}>
            <LottieView
              style={styles.Lottie}
              source={require("../assets/lottie/shapesbackground.json")}
              autoPlay
            />
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
              Log in
            </Text>
            <TextInput
              style={styles.input}
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => controlEmailPassword(email, password)}
            >
              <Text
                style={{
                  fontFamily: "sans-serif-condensed",
                  fontWeight: "bold",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <View
              style={{ flexDirection: "row", marginTop: 20, marginLeft: 50 }}
            >
              <Text
                style={{
                  fontFamily: "sans-serif-condensed",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Forgot password?
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: "sans-serif-condensed",
                  textDecorationLine: "underline",
                  fontSize: 15,
                }}
              >
                Reset password
              </Text>
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
  loginBox: {
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

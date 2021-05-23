import React, { useState,useRef } from "react";
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
import Category from "./Category";
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
      firebase.
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
        firebase.firestore()
        .collection('Users')
        .get()
        .then(querySnapshot=>{
          querySnapshot.forEach(documentSnapshot=>{
            if(documentSnapshot.data().email == email){
              setNickname(documentSnapshot.data().nickname);
            }
          })
        })
        navigation.navigate(Category, { nickname: nickname });
      });
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 ,marginTop: 250  }}>
          <LottieView
            style={styles.welcomeLottie}
            source={require("../assets/lottie/shapesbackground.json")}
            autoPlay
          />
          <View>
            <TextInput
              style={{ ...styles.input}}
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
              <Text>Login</Text>
            </TouchableOpacity> 
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
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#FDA7DF",
    marginTop: 10,
    borderRadius: 30,
    padding: 10,
  },
  welcomeLottie: {
    flex: 1,
    alignItems: "center",
    marginTop:-125
  },
});

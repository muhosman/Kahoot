import React,{Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Welcome({ navigation }: any) {

  return (
    <View style={{ flex: 1, backgroundColor: "#dff9fb" }}>
      <View style={styles.container}>
        <LottieView
          style={styles.welcomeLottie}
          source={require("../assets/lottie/welcome.json")}
          autoPlay
        />
      </View>

      <View style={{ flex: 1, justifyContent: "center" ,alignContent:"center"}}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate("Login")}
        >
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="login" size={20} color="black" />
            <Text style={styles.textStyle}>Log In</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSignUp}
          onPress={() => navigation.navigate("Register")}
        >
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="account-plus-outline"
              size={20}
              color="black"
            />
            <Text style={styles.textStyle}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeLottie: {
    flex: 1,
    alignItems: "center",
  },
  buttonLogin: {
    alignItems: "center",
    backgroundColor: "#f7d794",
    padding: 10,
    marginRight: 30,
    marginLeft: 30,
    borderTopEndRadius: 25,
    borderBottomStartRadius: 25,
    marginEnd: 45,
    marginStart: 51,
  },
  btnSignUp: {
    alignItems: "center",
    backgroundColor: "#cd84f1",
    padding: 10,
    marginRight: 30,
    marginLeft: 30,
    borderTopEndRadius: 25,
    borderBottomStartRadius: 25,
    marginEnd: 45,
    marginTop: 18,
    marginStart: 51,
    marginBottom: 40,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#273c75",
    marginStart: 15,
  },
});

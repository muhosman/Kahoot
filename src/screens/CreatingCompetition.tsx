import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

export default function CreatingCompetition({ navigation }: any) {
  const [categoryName, setCategoryName] = useState("");
  const [competitionName, setCompetitionName] = useState("");
  const [questionNumber, setQuestionNumber] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#ecf0f1" }}>
      <LottieView
        style={styles.welcomeLottie}
        source={require("../assets/lottie/shapesbackground.json")}
        autoPlay
      />
      <View
        style={{
          marginTop: 35,
        }}
      >
        <Text
          style={{
            color: "#8e44ad",
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 15,
            marginBottom: 15,
          }}
        >
          Creat Competition
        </Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <TextInput
          style={{ ...styles.input }}
          onChangeText={setCategoryName}
          placeholder="Category Name"
          value={categoryName}
        />
        <TextInput
          style={styles.input}
          onChangeText={setCompetitionName}
          placeholder="Competition Name"
          value={competitionName}
        />
        <TextInput
          style={styles.input}
          onChangeText={setQuestionNumber}
          placeholder="Question Number"
          value={questionNumber}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.btnCreate}
          onPress={() => navigation.navigate("AddingQuestion")}
        >
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-create" size={22} color="black" />
            <Text style={styles.textStyle}>Create</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    alignSelf: "center",
    width: 255,
    height: 45,
    borderRadius: 18,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#27ae60",
    textAlign: "center",
  },
  btnCreate: {
    alignItems: "center",
    backgroundColor: "#cd84f1",
    padding: 10,
    marginRight: 36,
    marginLeft: 36,
    borderTopEndRadius: 25,
    borderBottomStartRadius: 25,
    marginTop: 25,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "#c44569",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#273c75",
    marginStart: 15,
  },
  welcomeLottie: {
    flex: 1,
    alignItems: "center",
  },
});

import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Directions } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";

export default function Category({ navigation }: any) {
  //const [nickname] = route.params;
  const [visible, setVisible] = useState(false);
  const [Category, setCategory] = useState([
    { name: "Spor" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
    { name: "Eğitim" },
  ]);
  const [Competition, setCompetition] = useState([
    {
      name: "Basketbol",
      url: "https://i4.hurimg.com/i/hurriyet/75/0x0/5de0bb392269a216d467e176.gif",
    },
    {
      name: "Basketbol",
      url: "https://i4.hurimg.com/i/hurriyet/75/0x0/5de0bb392269a216d467e176.gif",
    },
    {
        name: "Basketbol",
        url: "https://i4.hurimg.com/i/hurriyet/75/0x0/5de0bb392269a216d467e176.gif",
    },
    {
        name: "Basketbol",
        url: "https://i4.hurimg.com/i/hurriyet/75/0x0/5de0bb392269a216d467e176.gif",
    },
  ]);
  return (
    <FlatList
      style={{ maxHeight: "100%" }}
      showsVerticalScrollIndicator={false}
      data={Category}
      renderItem={({ item, index }) => (
        <View style={styles.list}>
          <Text
            style={{
              borderBottomWidth: 5,
              borderRadius: 10,
              borderBottomColor: "grey",
              paddingBottom: 5,
              paddingLeft: 10,
            }}
          >
            {item.name}
          </Text>
          <FlatList
            style={{ maxHeight: "100%" }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Competition}
            renderItem={({ item }) => (
              <View style={{ ...styles.list, margin: 15 }}>
                <TouchableOpacity
                //onPress={navigation.navigate(CompetitionInfo,item,)}
                >
                  <Image
                    style={styles.tinyImage}
                    source={{
                      uri: item.url,
                    }}
                  />
                </TouchableOpacity>
                <Text>{item.name}</Text>
              </View>
            )}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#FDA7DF",
    width: 75,
    height: 75,
    borderRadius: 30,
    padding: 10,
  },
  list: {
    height: 120,
    marginLeft: 20,
    marginRight: 20,
  },
  tinyImage: {
    width: 50,
    height: 50,
  },
  buttonView: {
    marginTop: 650,
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 10,
    position: "absolute",
  },
});

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
      style={{ maxHeight: "85%" }}
      showsVerticalScrollIndicator={false}
      data={Category}
      renderItem={({ item, index }) => (
        <View style={{ ...styles.list, height: 200 }}>
          <Text
            style={{
              borderBottomWidth: 5,
              borderRadius: 10,
              borderBottomColor: "grey",
              paddingBottom: 10,
              paddingLeft: 20,
              fontFamily: "sans-serif-condensed",
              fontWeight: "bold",
              fontSize: 20,
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
              <View
                style={{
                  ...styles.list,
                  height: 100,
                  width: 100,
                  margin: 15,
                  backgroundColor: "#58B19F",
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                }}
              >
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
                <Text
                  style={{
                    marginTop: 5,
                    alignSelf: "center",
                    fontFamily: "sans-serif-condensed",
                  }}
                >
                  {item.name}
                </Text>
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

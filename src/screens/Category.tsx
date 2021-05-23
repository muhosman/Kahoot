import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Directions } from "react-native-gesture-handler";
import CompetitionInfo from "./CompetitionInfo";
import Create from "./Create";
import LottieView from "lottie-react-native";

export default function Category({ navigation, }: any) {
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
    { name: "Eğitim" },    { name: "Eğitim" },
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
  ]);

  function create() {
    //navigation.navigate(Create);
  }
  function closePopUp() {

    setVisible(false);
  }
  function join() {
    console.warn('asfas');
    setVisible(true);
  }

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#9AECDB'  }}>
      <TouchableWithoutFeedback onPress={closePopUp}>
        <View style={{ flex: 1,marginTop:30,backgroundColor:'#9AECDB' }}>
             <LottieView
              style={styles.welcomeLottie}
              source={require("../assets/lottie/shapesbackground.json")}
              autoPlay
            />
            <FlatList
            style={{ maxHeight: "100%" }}
            showsVerticalScrollIndicator={false}
            data={Category}
            renderItem={({ item,index }) => (
              <View style={styles.list}>
                <Text style={{borderBottomWidth:5,borderRadius:10,borderBottomColor:'grey',paddingBottom:10}}>{item.name}</Text>
                
                <FlatList
                  style={{ maxHeight: "100%" }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={Competition}
                  renderItem={({ item }) => (
                    <View style={{ ...styles.list,height:100, margin: 15 ,backgroundColor:'#58B19F',padding:15}}>
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

          <View style={styles.buttonView}>
            <TouchableOpacity style={{ ...styles.button, marginRight: 10 }} onPress={create}>
              <Text style={{ marginTop: 20 }}>Create</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={join}>
              <Text style={{ marginTop: 20 }}>Join</Text>
            </TouchableOpacity>
          </View>

        </View>
      </TouchableWithoutFeedback>
      {visible ? 
      <View style={styles.visible}>

      </View> : null}
    </SafeAreaView>
  );
}

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
    alignItems: "center",
    backgroundColor: "#FDA7DF",
    width: 75,
    height: 75,
    borderRadius: 30,
    padding: 10,
  },
  list: {
    height: 150,
    marginLeft:20,
    marginRight:20,
    borderRadius:20,

  },
  tinyImage: {
    width: 50,
    height: 50,
    alignSelf:"center"
  },
  visible: {
    width: "80%",
    height: "70%",
    position: "absolute",
    top: 120,
    left: 40,
    backgroundColor: "green",
    shadowOpacity: 1,
    shadowRadius: 250,
    shadowColor: "grey",
    borderRadius: 10,
  },
  buttonView:{
    marginTop: 650,
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 10,
    position: "absolute",
  },
  welcomeLottie: {
    flex: 1,
    alignItems: "center",
  },
});

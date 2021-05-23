import React, { useState } from 'react'
import { SafeAreaView,View,StyleSheet,Text,FlatList,TouchableOpacity,Image} from 'react-native'
import CompetitionInfo from './CompetitionInfo';
import Create from "./Create";

export default function Category({route,navigation}:any) {
    const [ nickname ] = route.params;
    const [Category, setCategory] = useState([{name:'Spor'},{name:'Eğitim'}]);
    const [Competition, setCompetition] = useState([{name:"Basketbol",url:"https://i4.hurimg.com/i/hurriyet/75/0x0/5de0bb392269a216d467e176.gif"}]);

    return (
        <SafeAreaView style={{flex:1}}>
          <View style={{flex: 1}}>
            <FlatList
              style={{maxHeight: '15%'}}
              data={Category}
              renderItem={({item, index}) => (

                <View style={{margin: 15}}>
                  <View style={styles.list}>

                    /////////Category Name
                    <Text>{item.name}</Text>
                    
                    /////////Inner flatlist
                    <FlatList
                      style={{maxHeight: '15%'}}
                      horizontal
                      data={Competition}
                      renderItem={({item, index}) => (
                        <View style={{margin: 15}}>
                          <View style={styles.list}>
                            ///Competition Touchable Image
                            <TouchableOpacity onPress={navigation.navigate(CompetitionInfo,item)}>
                                <Image
                                    style={styles.tinyImage}
                                    source={{
                                    uri: item.url,
                                    }}
                                />
                            </TouchableOpacity>

                            <Text>{item.name}</Text>
                          </View>
                        </View>
                      )}
                    />

                  </View>
                </View>

              )}
            />
          </View>
            <TouchableOpacity
              style={styles.button}
              onPress={navigation.navigate(Create)}
              >
              <Text>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              //onPress={}
              >
            <Text>Join</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    input: {
      alignSelf:"center",
      width: 250,
      height: 40,
      borderRadius: 30,
      marginVertical: 10,
      borderWidth: 1,
      textAlign:"center"
    },
    button: {
      alignSelf:"center",
      backgroundColor: "#FDA7DF",
      marginTop: 10,
      borderRadius: 30,
      padding: 10,
    },
    list:{
        width: 60,
        height: 60,
        alignSelf: 'center',
    },
    tinyImage: {
        width: 50,
        height: 50,
    },
  });
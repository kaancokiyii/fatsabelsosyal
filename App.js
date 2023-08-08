import { View, StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import Header from "./Header.jsx"
import Card from "./Card.js";
import React , {useEffect, useState} from 'react';
import menuAll from "./menuAll.js";
import CardDetail from "./CardDetail.js";
import customData from './menu.json';
import CardMenu from "./CardMenu.js";


import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
function generateRandomKey() {
  return Math.random().toString(36).substr(2, 9); // Rastgele 9 karakter uzunluğunda bir key oluşturur
}
 
// Kullanım:



const App = ({ navigation }) => {


  /* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 19, fontWeight: "500" }}>
          Kırmızı Etli Lezzetler
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "300" }}> Hepsine Bak </Text>
      </View>*/

      
      const [data, setData] = useState([]);

  const jsxElements =[];

  let dataCustom = Object.keys(customData)[0];
 // console.info(Object.keys(customData).length);
  let dataComp;
  let index = 0;
  for(let i = 0; i < Object.keys(customData).length;i++){
    index = 0;
     dataComp = Object.values(customData)[i];
     jsxElements.push( <View key={generateRandomKey()}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <Text key={generateRandomKey()} style={{ fontSize: 19, fontWeight: "800" }}>
          {Object.keys(customData)[i]}
      </Text>
      <Text  key={generateRandomKey()} style={{ fontSize: 15, fontWeight: "300" }} onPress={()=>{navigation.navigate('Yemek',{nameProp:Object.keys(customData)[i]})}}> Hepsine Bak </Text>
    </View>)
   jsxElements.push(
    <ScrollView
    key={generateRandomKey()}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginBottom: 20 }}
    >
      {dataComp.map((data, index) => (
      
        <View key={generateRandomKey()} style={{ marginRight: 10 }}>
          <Card price={data[1]} key={generateRandomKey()} title={data[0]} imageName={data[3]}  onPress={() => navigation.navigate('Detail',{titleProp:data[0],priceProp:data[1],descProp:data[2],imageName:data[3]})} />
        </View>
      ))}
    </ScrollView>
  );
  index = index + 1;
  
    
}


 
useEffect(() => {
  // Verileri işleyen kodlar burada yer alacak
  const processedData = dataComp;
  setData(processedData);
}, []);


  return (

    
    <View key={generateRandomKey()} style={{ flex: 1 }}>
      
      <Header></Header>
      <ScrollView key={generateRandomKey()} style={styles.container}>
    
     
      
     

      {
      /*data.map((item,index)=>{
        console.log(item[0]);

        return 
     
      })*/
      
      jsxElements
      }
    


     
   </ScrollView>
      </View>
   
  );
};



const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      headerShown: false,
    },
  },
  Detail:{
    screen:CardMenu
  },
  Yemek:{
    screen:menuAll
  }
},{
  initialRouteName:'Home',
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default createAppContainer(AppNavigator);

// CardDetail.js
import React from "react";
import {
  View,
  Text,
  Image,
  useState,
  useEffect,
  StyleSheet,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";
import Card from "./Card.js";
import CardDetail from "./CardDetail.js";
import customData from "./menu.json";
function generateRandomKey() {
  return Math.random().toString(36).substr(2, 9); // Rastgele 9 karakter uzunluğunda bir key oluşturur
}
const menuAll = ({ navigation, nameProp }) => {
  // navigation parametresi üzerinden tıklanan Card'ın bilgilerini alabilirsiniz
  const title = navigation.getParam('nameProp');
 
  const jsxElements = [];
  //console.log(Object.keys(customData);
  {
    for (let i = 0; i < Object.keys(customData).length; i++) {
      index = 0;

      dataComp = Object.keys(customData);
      //console.log(dataComp);
      // DataComp bize Kahvaltı, Çorbalar gibi an başlıkları veriyor Object.keys()
      if (dataComp[i] == title) {
        //console.log('selam ' + index);
       // alert(dataComp[i]);
        jsxElements.push(
          <View key={generateRandomKey()}
            style={{
              paddingHorizontal: 20,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Text key={generateRandomKey()} style={{ fontSize: 19, fontWeight: "500" }}>
              {Object.keys(customData)[i]}
            </Text>
          </View>
        );
        jsxElements.push(
          <ScrollView
          key={generateRandomKey()}
            showsHorizontalScrollIndicator={false}
          >
            {Object.values(customData)[i].map((data, index) => (
              
            
              <View key={generateRandomKey()}>
                <CardDetail
                  price={data[1]}
                  key={generateRandomKey()}
                  desc={data[2]}
                  title={data[0]}
                  image={data[3]}
                  navi= {navigation}
                
                />
              </View>
            ))}
          </ScrollView>
        );
        index = index + 1;
      } else {
      }
    }
  }
  return <View key={generateRandomKey()} >{jsxElements}</View>;
};
const styles = StyleSheet.create({});
export default menuAll;

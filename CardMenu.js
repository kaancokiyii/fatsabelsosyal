// CardDetail.js
import React from 'react';
import { View, Text,Image, useState, useEffect, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
function generateRandomKey() {
  return Math.random().toString(36).substr(2, 9); // Rastgele 9 karakter uzunluğunda bir key oluşturur
}
const CardDetail = ({ navigation, titleProp, priceProp,descProp }) => {
  // navigation parametresi üzerinden tıklanan Card'ın bilgilerini alabilirsiniz
  const title = navigation.getParam('titleProp');
  const price = navigation.getParam('priceProp');
  const desc = navigation.getParam('descProp');
  const image = navigation.getParam('imageName');
  console.log(image);
  return (
    <View key={generateRandomKey()} >
        <View key={generateRandomKey()} className='headerClass' style={{width:'100%',height:600,backgroundColor:'#444444',borderBottomLeftRadius: 40, borderBottomRightRadius: 40}}>

          
            <View key={generateRandomKey()} style={styles.slide}>
            <Image key={generateRandomKey()} source={{uri:image}} style={styles.image} />
            </View>
           
       
       </View>
    <View  key={generateRandomKey()} style={{border:'1px solid', backgroundColor:'#FFFFFF', marginTop:20, borderRadius:20,padding:10}}>
          <Text key={generateRandomKey()} style={{fontSize:21, marginTop:20, fontWeight:600, marginLeft:10}}>{title}</Text>
          <Text key={generateRandomKey()} style={{fontSize:16,fontWeight:400, marginLeft:10}}>{price}</Text>
          <Text key={generateRandomKey()} style={{fontSize:16,fontWeight:400, marginTop:20, marginLeft:10,marginBottom:20}}>{desc}</Text>
    </View>

    </View>
    
  );
};

export default CardDetail;

const styles = StyleSheet.create({
 image :{width:'100%',height:600,backgroundColor:'#FFFFFF',borderBottomLeftRadius: 40, borderBottomRightRadius: 40},
 wrapper: {
  height: 3600,
  
},
slide: {
  flex: 1,
  justifyContent: 'center',
    height: 600,
  alignItems: 'center'
},
image: {
  width: '100%',
  height: 600,
  resizeMode: 'cover',
  borderBottomLeftRadius: 40, borderBottomRightRadius: 40
},
});

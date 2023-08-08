import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
function generateRandomKey() {
  return Math.random().toString(36).substr(2, 9); // Rastgele 9 karakter uzunluğunda bir key oluşturur
}
const Card = ({ title, price, onPress, imageName }) => {
  
  

  return (
    <View key={generateRandomKey()} style={styles.test}> 
      <TouchableOpacity key={generateRandomKey()} onPress={onPress}>
        <ScrollView key={generateRandomKey()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: 'row', flexWrap: 'wrap' }}
        >
          <View key={generateRandomKey()} style={styles.container}>
          <Image key={generateRandomKey()} source={{uri:imageName}} style={styles.image} />
            <Text key={generateRandomKey()} style={styles.title}>{title}</Text>
            <Text key={generateRandomKey()} style={styles.price}>{price}</Text>
          </View>
        </ScrollView>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  container: {
    width: 155,
    height: 209,
    backgroundColor: 'white',
    borderRadius: 20,
    backgroundColor: 'rgba(215, 220, 224, 0.13)',
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  image: {
    width: 139,
    height: 130,
    position: 'absolute',
    borderRadius: 20,
    marginLeft: 7,
    marginTop: 5,
    top: 0,
  },
  title: {
    marginTop: 130,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 5,
    alignSelf: 'flex-start',
  },
});

export default Card;

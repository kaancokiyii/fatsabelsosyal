import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
function generateRandomKey() {
  return Math.random().toString(36).substr(2, 9); // Rastgele 9 karakter uzunluğunda bir key oluşturur
}
const CardDetail = ({ title, price, desc,navi,image }) => {
 
  return (
    <TouchableOpacity key={generateRandomKey()} style={styles.button} onPress={()=>{
      
      navigation= navi;
      
      navigation.navigate("Detail", {
        titleProp: title,
        priceProp: price,
        descProp: desc,
        imageName: image,
       })}}>
          <View key={generateRandomKey()} style={styles.container}>
      <View key={generateRandomKey()} style={styles.swiperContainer}>
        <Image key={generateRandomKey()} source={{uri:image}} style={styles.image} />
      </View>
      <View key={generateRandomKey()} style={styles.infoContainer}>
        <Text key={generateRandomKey()} style={styles.title}>{title}</Text>
        <Text key={generateRandomKey()} style={styles.price}>{price}</Text>
        <Text key={generateRandomKey()} style={styles.desc}>{desc}</Text>
      </View>
    </View>
    </TouchableOpacity>
  
  );
};

        

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    marginTop: 10,
    marginBottom: 20,
        
    backgroundColor:'#FFFFFF',
  },
  swiperContainer: {
    width: '50%',
    height:300,
    marginBottom:50,
    marginTop:20,
    borderRadius:30,
  },
  swiper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    borderRadius:30,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 20,
    width:'50%'
  },
  title: {
    fontSize: 19,
    fontWeight: "500",
  },
  price: {
    fontSize: 15,
    fontWeight: "300",
  },
  desc: {
    fontSize: 15,
    fontWeight: "300",
    marginTop: 10,
  },
});

export default CardDetail;

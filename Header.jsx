import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>Fatsa Belediyesi</Text>
          <Text style={styles.subtitle}>Sosyal Tesisler</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image source={require('./logo.png')} style={styles.logo} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position:'static',
    backgroundColor: '#005AD3',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30
  
  },
  headerContainer: {
    position:'static',
    backgroundColor: '#005AD3',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:100
  },
  leftContainer: {
    flexDirection: 'column',
  },
  rightContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default Header;

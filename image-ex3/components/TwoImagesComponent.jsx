const {
  View,
  Text,
  Image,
  StyleSheet,
  } = require("react-native");
  
  const TwoImages = () => {
  return (
  <View style={styles.images}>
  <Text></Text>
  
    <Image
  source={require("../assets/gatinho.jpg")}
  style={{ width: 100, height: 100}}
  />

  <Image
  source={require("../assets/gato.webp")}
  style={{ width: 100, height: 100}}
  />
  </View>
)}
  export default TwoImages;

  const styles = StyleSheet.create({
    images: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    
  
  });
const {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Button,
  Alert
  } = require("react-native");
  
  const TwoImages = () => {
  return (
  <View style={styles.images}>
  <Text></Text>
  
  <ImageBackground
  source={require("../assets/gatinho.jpg")}
  style={styles.image1}
  imageStyle={{borderRadius: 100}}
  >
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>



  <Text style={{ color: "white", textAlign: 'center' }}>GATINHO</Text>
  <Text></Text>
  <Text style={{ color: "white", textAlign: 'center' }}>Foto de um gatinho fofinho</Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>

  <Button title="Clique Aqui" onPress={() => Alert.alert('Miau!')} />

  </ImageBackground>

  </View>
)}
  export default TwoImages;

  const styles = StyleSheet.create({
    images: {
      alignItems: 'center',
      flexDirection: 'row',
    },

    image1: {
      width: 400, 
      height: 400,
    },

    
  
  });
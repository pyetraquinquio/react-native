const {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert
  } = require("react-native");
  
  const TwoImages = () => {
  return (
  <View style={styles.images}>

<Text style={{ color: "white", textAlign: 'center' }}>GATINHO</Text>

  <Text></Text>
  
  <Image
  source={require("../assets/gatinho.jpg")}
  style={styles.image1}
  />
  <Text></Text>
  <Text style={{ color: "white", textAlign: 'center' }}>Foto de um gatinho fofinho</Text>
  <Text></Text>
 

  <Button title="Clique Aqui" onPress={() => Alert.alert('Miau!')} />


  </View>
)}
  export default TwoImages;

  const styles = StyleSheet.create({
    images: {
      alignItems: 'center',
    },

    image1: {
      borderRadius: 50,
      width: 400, 
      height: 400,
    },
  
  });
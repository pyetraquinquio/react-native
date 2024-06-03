const {
  View,
  Text,
  ImageBackground,
  } = require("react-native");
  
  const ImageBack = () => {
  return (
  <View >
  <Text></Text>
  
  <ImageBackground
  source={require("../assets/gato.webp")}
  style={{ width: 200, height: 200 }}
  >
  
  <Text style={{ color: "white" }}>Texto sobre a imagem</Text>
  </ImageBackground>
  </View>
)}
  export default ImageBack;

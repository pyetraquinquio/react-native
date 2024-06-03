const {
  View,
  Text,
  StatusBar,
  Image,
  } = require("react-native");
  
  const App = () => {
  return (
  <View>
  <StatusBar />
  <Text>Meu Primeiro App</Text>
  <Text></Text>
  
  {/* Imagem sendo carregada externamente */}
  
  
  {/* Imagem sendo carregada internamente da pasta assets */}
  <Image
  source={require("./assets/gatinho.jpg")}
  style={{ width: 150, height: 150, justifyContent: 'center', alignItems: 'center'}}
  />
  </View>
)}
  export default App;
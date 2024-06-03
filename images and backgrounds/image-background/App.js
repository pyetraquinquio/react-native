const {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  } = require("react-native");
  
  const App = () => {
  return (
  <View>
  <StatusBar />
  <Text>Meu Primeiro App</Text>
  <Text></Text>
  
  {/* //Imagem sendo carregada externamente */}
  <Image
  source={{
  uri: "https://www.doglife.com.br/blog/assets/post/gato-filhote-tudo-que-voce-precisa-saber-para-cuidar-bem-61aa5b4f5448461cf9e0a54b/filhote-capa.jpg.jpg"
  }}
  style={{ width: 200, height: 200 }}
  />
  
  {/* //Imagem sendo carregada internamente da pasta assets */}
  <Image
  source={require("./assets/gatinho.jpg")}
  style={{ width: 200, height: 200 }}
  />
  
  <ImageBackground
  source={require("./assets/gatinho.jpg")}
  style={{ width: 300, height: 300 }}
  >
  
  <Text style={{ color: "white" }}>Texto sobre a imagem</Text>
</ImageBackground>
</View>
);
};


export default App;
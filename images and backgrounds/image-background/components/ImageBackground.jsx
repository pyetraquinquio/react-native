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
  
  {/* Imagem sendo carregada externamente */}
  <Image
  source={{
  uri: "https://t.ctcdn.com.br/HfaAfdSP0yElfXWQelkeEQvkgyU=/1000x563/smart/i257652.jpeg",
  }}
  style={{ width: 200, height: 200 }}
  />
  
  {/* Imagem sendo carregada internamente da pasta assets */}
  <Image
  source={require("./assets/gatinho.jpg")}
  style={{ width: 200, height: 200 }}
  />
  
  {/* Utilização de ImageBackground */}
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
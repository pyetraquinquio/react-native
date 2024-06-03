const {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  } = require("react-native");
  
  const App = () => {
  return (
  <View style={styles.container}>
  <StatusBar />
  <Text></Text>
  
  
  {/* //Imagem sendo carregada internamente da pasta assets */}
  <Image  
  source={require("./assets/gatinho.jpg")}
  style={{ width: 150, height: 150 }}
  />

</View>
);
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e0b0ff"
  },

});

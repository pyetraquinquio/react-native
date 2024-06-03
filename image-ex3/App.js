import TwoImages from "./components/TwoImagesComponent";
const {
  View,
  Text,
  StatusBar,
  StyleSheet,
  } = require("react-native");
  
  const App = () => {
  return (
  <View style={styles.container}>
  <StatusBar />
  <Text></Text>
  
  <TwoImages></TwoImages>

</View>
);
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e0b0ff",
  },

});

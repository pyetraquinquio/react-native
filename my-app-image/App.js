import { StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      source = {{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      style = {styles.image}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
   
  image: {
    width: 100,
    height: 100,
  },
});

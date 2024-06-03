import { StyleSheet, View } from 'react-native';
import Greeting from './components/Greeting';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting></Greeting>


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
});

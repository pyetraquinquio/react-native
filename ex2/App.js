import { StyleSheet, View } from 'react-native';
import ClickCounter from './components/ClickCounter';

export default function App() {
  return (
    <View style={styles.container}>
      
      <ClickCounter></ClickCounter>


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

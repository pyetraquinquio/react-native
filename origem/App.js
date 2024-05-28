import { StyleSheet, View, Text} from 'react-native';
import CoxinhaItem from './components/CoxinhaItem';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Lista de Salgados</Text>
      
      <CoxinhaItem />


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

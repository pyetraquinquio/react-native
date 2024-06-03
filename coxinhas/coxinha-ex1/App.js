import { StyleSheet, View, Text} from 'react-native';
import CoxinhaItemDetalhado from './components/CoxinhaItemDetalhado';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Lista de Salgados</Text>
      
      <CoxinhaItemDetalhado></CoxinhaItemDetalhado>


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

  text: {
    fontSize: 20,
   }
});

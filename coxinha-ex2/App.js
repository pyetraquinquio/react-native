import { StyleSheet, View, Text} from 'react-native';
import CoxinhaItemComImagem from './components/CoxinhaItemComImagem';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Lista de Salgados</Text>
      
      <CoxinhaItemComImagem></CoxinhaItemComImagem>


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

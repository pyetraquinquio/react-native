import { StyleSheet, View, Button, Alert} from 'react-native';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';


export default function App() {
  return (
    <View style={styles.container}>
      
      <Componente1></Componente1>

      <Componente2></Componente2>

      <Button 
          title= "Compre"
          onPress={() => Alert.alert('Compra realizada com sucesso!')}
        />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
   },

  
});

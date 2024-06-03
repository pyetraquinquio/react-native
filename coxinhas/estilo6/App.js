//PRESSABLE

import { StyleSheet, View, Text, Button, Alert} from 'react-native';
import CoxinhaItemEstilo6 from './components/CoxinhaItemEstilo6';

export default function App() {

  const cliqueBotao = () => {
    Alert.alert("Clique no botão com função");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Lista de Salgados</Text>
      
      <Text></Text>

      <CoxinhaItemEstilo6 
      nome="Bauru"
      preço={5}
      aoClicar={() => Alert.alert("Pastel de Bauru com Pressable")}
      />

      <Text></Text>

      <CoxinhaItemEstilo6 
      nome="Frango com Catupiry"
      preço={5}
      aoClicar={() => Alert.alert("Pastel de Frango com Catupiry com Pressable")}
      />

      <Text></Text>

      <CoxinhaItemEstilo6 
      nome="Calabresa"
      preço={7}
      originalPreço={8}
      aoClicar={() => Alert.alert("Pastel de Calabresa com Pressable")}
      />

      <Text></Text>

      <Button
      title="Botão 1 alert"
      onPress={() => Alert.alert("Texto do primeiro botão")}
      />

      <Text></Text>

      <Button
      title="Botão 2 com função"
      onPress={cliqueBotao}
      color={"blueviolet"} //Define a cor do botão
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 20
  }
});

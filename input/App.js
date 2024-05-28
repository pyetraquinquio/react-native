import React, {useState} from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput} from 'react-native';

export default function App() {

  const [campoNome, setCampoNome] = useState(""); 

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="blueviolet" barStyle="light-content"/>

      <TextInput
      style={styles.input}
      placeholder='Digite seu nome'
      placeholderTextColor="blueviolet"
      value={campoNome} //Define o valor atual do campo de entrada de texto como campoNome
      onChangeText={(texto) => setCampoNome(texto)} //Atualiza o estado campoNome quando o texto do campo de entrada muda
      />

    <Text></Text>


      <Text style={styles.texto}>Digitado no campo: {campoNome}</Text>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e0b0ff"
  },

  texto: {
    fontSize: 15
  }, 

  input: {
    padding: 8,
    borderWidth: 2,
    borderRadius: 10,
    width: 220,
    backgroundColor: "#a87bc7"
  }
});

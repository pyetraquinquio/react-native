import React,{ useState } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

export default function Contador() {

  const [nomeCliente, setNomeCliente]  = useState("...");

  const clicarBotao1 = () => {
    setNomeCliente("Cliente 1");
  };

  const clicarBotao2 = () => {
    setNomeCliente("Cliente 2")
  };

  return (
    <View style={styles.container}>

      <Text>Meu Primeiro App</Text>

      <Text></Text>

      <Text>Eu sou o/a {nomeCliente}</Text>

      <Text></Text>

      
      <Button title="Mudar para Cliente 1" onPress={clicarBotao1} />

      <Text></Text>

      <Button title="Mudar para Cliente 2" onPress={clicarBotao2} />


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

import React,{ useState } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

export default function Contador() {

  const [count, setCount]  = useState(0);

  return (
    <View style={styles.container}>

      <Text>Você clicou {count} vezes</Text>

      <Text></Text>
      
      <Button title="Clique Aqui" onPress={() => setCount(count + 1)} />

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

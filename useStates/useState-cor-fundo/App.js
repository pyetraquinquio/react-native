import React,{ useState } from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';

export default function MudarCor() {

  const [corFundo, setCorFundo]  = useState("white");

  const corFundo1 = () => {
   setCorFundo("blueviolet");
  };

  const corFundo2= () => {
    setCorFundo("red");
  };


  return (
    <View style={[styles.container, {backgroundColor: corFundo}]}>

      
      <Button title="Change to Blueviolet" onPress={corFundo1} />

      <Text></Text>

      <Button title="Change to Red" onPress={corFundo2} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

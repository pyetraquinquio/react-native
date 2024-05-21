import { View, Button, Alert, Text } from 'react-native';


export default function ClickCounter() {

    let count = 0;

    // function contador() {
    //     var setCount = count++
    //     return Alert.alert("Você clicou " + setCount + " vezes!")
    // }
    
    return (
      <View>
        
        <Button 
          title= "Pressione-me"
          //onPress={() => {contador()}}
          onPress={() => { 
            count += 1
            return Alert.alert(`Você clicou ${count} vezes`)
           }}
        />

      <Text>Número de cliques: 0</Text>
  
      </View>
    );
  }
import {View, Button, Alert, Text } from 'react-native';

export default function Greeting() {
  return (
    <View>
      <Text>Olá, React Native!</Text>
      
      <Button 
        title= "Pressione-me"
        onPress={() => Alert.alert('Olá, Mundo!')}
      />


    </View>
  );
}
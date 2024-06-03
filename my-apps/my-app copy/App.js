import { StyleSheet, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button 
        title= "Pressione-me"
        onPress={() => Alert.alert('Botão Pressionado!')}
      />


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

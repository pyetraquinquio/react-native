import { StyleSheet, View, Button} from 'react-native';

const MyButton = (props) => {
  return <Button title={props.title} onPress={props.onPress} />;
};

export default function App() {

  return (
    <View style={styles.container}>

      <MyButton 
      title="Clique Aqui"
      onPress={() => alert('Você clicou no botão!')}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black"
  },

});

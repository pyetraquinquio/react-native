import { StyleSheet, View, Text} from 'react-native';

const nomes = [
  {name:"Pypy"},
  {name: "Emy"},
  {name: "Mary"},
  {name: "Gaby"}
]

const Array = (props) => {
  return <Text>Hello, {props.name}</Text>
};

export default function App() {

  return (
    <View style={styles.container}>

      {nomes.map((saudaçao) => (
        <Array name={saudaçao.name}/>
      ))}



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

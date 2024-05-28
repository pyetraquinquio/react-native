import { StyleSheet, View, Text} from 'react-native';

const Greeting = (props) => {
  return <Text>Hello, {props.name}</Text>;
};

export default function App() {

  return (
    <View style={styles.container}>

      <Greeting  name="Nicolas" />

      <Text></Text>

      <Greeting  name="Matthew" />

      <Text></Text>

      <Greeting  name="Christopher" />


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

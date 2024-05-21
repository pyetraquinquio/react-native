import { View, Text, StyleSheet } from 'react-native';


export default function CoxinhaItem() {
   return (
      <View style={styles.conteiner}>
        <Text style={styles.nome}>Coxinha de Frango</Text>
        <Text style={styles.preço}>R$: 5,50</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  conteiner: {
    margin: 10,
    padding: 10,
    backgroundColor: "#CCC",
  },

  nome: {
    fontSize: 15,
    fontWeight: "bold",
  },

  preço: {
    fontSize: 13,
    color: "red",
  },
})
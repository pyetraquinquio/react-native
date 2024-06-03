import { View, Text, StyleSheet } from 'react-native';


export default function CoxinhaItemDetalhado() {
   return (
      <View style={styles.conteiner}>
        <Text style={styles.nome}>Coxinha de Frango</Text>
        <Text style={styles.preço}>R$: 5,50</Text>
        <Text style={styles.descriçao}>Coxinha de frango frita com adicional de catupiry</Text>

      </View>
    );
  }

const styles = StyleSheet.create({
  conteiner: {
    margin: 10,
    padding: 10,
    backgroundColor: "blueviolet",
  },

  nome: {
    fontSize: 17,
    fontWeight: "bold",
    padding: 5,
  },

  preço: {
    fontSize: 15,
    color: "red",
    padding: 8,
  },

  descriçao: {
    fontSize: 13,
    padding: 5,
  }
})
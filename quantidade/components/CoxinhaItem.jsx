import { View, Text, StyleSheet } from 'react-native';


export default function CoxinhaItem() {
  let nome = "Coxinha de Frango"
  let preço = 5.2528
  let quantidade = 20
   return (
      <View style={styles.conteiner}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.preço}>{`R$: ${preço.toFixed(2)}`}</Text>
        <Text style={styles.quantidade}>{`Quantidade disponível: ${quantidade}`}</Text>
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
    fontSize: 17,
    fontWeight: "bold",
  },

  preço: {
    fontSize: 15,
  },

  quantidade: {
    fontSize: 15,
  },
})
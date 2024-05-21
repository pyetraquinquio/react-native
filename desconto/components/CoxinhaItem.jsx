import { View, Text, StyleSheet } from 'react-native';


export default function CoxinhaItem() {
  let nome = "Coxinha de Frango"
  let preço = 5.5
  let desconto = preço * (10 / 100)
  let valorfinal = preço - desconto
   return (
      <View style={styles.conteiner}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.preço}>{`R$: ${preço.toFixed(2)}`}</Text>
        <Text style={styles.desconto}>{`Valor do desconto: R$: ${desconto}`}</Text>
        <Text style={styles.valorfinal}>{`Valor final: R$: ${valorfinal}`}</Text>

      </View>
    );
  }

const styles = StyleSheet.create({
  conteiner: {
    margin: 10,
    padding: 10,
    backgroundColor: "#CCC",
    fontSize: 20,
  },

  nome: {
    fontSize: 17,
    fontWeight: "bold",
  },

  preço: {
    fontSize: 15,
  },

  desconto: {
    fontSize: 15,
  },

  valorfinal: {
    fontSize: 15,
  }
})
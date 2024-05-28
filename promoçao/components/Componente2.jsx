import { View, Text, StyleSheet  } from 'react-native';


export default function Componente2() {

let quant1 = 1;
let preco = 60;
let quant2= 2


   return (
      <View style={styles.conteiner}>

        <Text style={styles.nome}>{`${quant1} por R$ ${preco.toFixed(2)}`}</Text>
        <Text style={styles.nome}>{`${quant2} por R$ ${preco.toFixed(2)}`}</Text>

        
      </View>
    );
  }

const styles = StyleSheet.create({
  conteiner: {
    margin: 10,
    padding: 20,
    borderWidth: 4,
    borderRightColor: "blueviolet",
    borderLeftColor: "blueviolet",
    borderBlockColor: "blueviolet",
    alignItems: "center"
  },

  nome: {
    fontSize: 15,
    padding: 5,
  },


})
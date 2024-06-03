import { View, Text, StyleSheet, Button, Alert } from 'react-native';


export default function CoxinhaItemComBotao() {
   return (
      <View style={styles.conteiner}>
        <Text style={styles.nome}>Coxinha de Frango</Text>
        <Text style={styles.preço}>R$: 5,50</Text>
        <Button 
          title= "Adicionar"
          onPress={() => Alert.alert('Coxinha adicionada ao carrinho!')}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  conteiner: {
    margin: 10,
    padding: 15,
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

})
import { View, Text, StyleSheet, Button, Alert } from 'react-native';


export default function CoxinhaItemComBotao() {
   return (
      <View style={styles.conteiner}>
        <Text style={styles.nome}>Coxinha de Frango</Text>
        <Text style={styles.preço}>R$: 5,50</Text>
        <Button 
          title= "Pressione-me"
          onPress={() => Alert.alert('Coxinha adicionada ao carrinho!')}
        />
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
    fontSize: 15,
    fontWeight: "bold",
  },

  preço: {
    fontSize: 13,
    color: "red",
  },

})
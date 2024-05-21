import { View, Text, StyleSheet, Image } from 'react-native';


export default function CoxinhaItemComImagem() {
   return (
      <View style={styles.conteiner}>
        <Text style={styles.nome}>Coxinha de Frango</Text>
        <Text style={styles.preço}>R$: 5,50</Text>
        <Image
        source = {{ uri: 'https://kyodai.com.br/wp-content/uploads/2018/07/cox_grande_kyodai_2-1.jpeg'}}
        style = {styles.image}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  conteiner: {
    margin: 10,
    padding: 10,
    backgroundColor: "blueviolet",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
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

  image: {
    width: 200,
    height: 200,
  },
})
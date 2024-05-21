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
  },

  nome: {
    fontSize: 15,
    fontWeight: "bold",
  },

  preço: {
    fontSize: 13,
    color: "red",
  },

  image: {
    width: 150,
    height: 150,
  },
})
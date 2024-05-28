import { View, Text, StyleSheet, Image  } from 'react-native';


export default function Componente1() {
   return (
      <View style={styles.conteiner}>

        <Text style={styles.nome}>Promoção</Text>
        <Text style={styles.compra}>Compre 2 e pague 1</Text>

        <Image
        source = {{ uri: 'https://i.pinimg.com/736x/ee/7a/80/ee7a802239445ad33730a75345f156a4.jpg'}}
        style = {styles.image}
        />

        
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
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
  },

  compra: {
    fontSize: 15,
    padding: 8,
  },

  image: {
    width: 200,
    height: 200,
  },

})
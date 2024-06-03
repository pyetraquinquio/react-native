import { FlatList, Text, View, StyleSheet, StatusBar } from 'react-native';
const data = [
{ id: '1', title: 'First Item' },
{ id: '2', title: 'Second Item' },
{ id: '3', title: 'Third Item' }
];
const Item = ({ title }) => (
<View style={styles.container}>
  <StatusBar />
<Text>{title}</Text>
</View>
);
const MinhaLista = () => {
return (
<FlatList
data={data}
renderItem={({ item }) => <Item title={item.title} />}
keyExtractor={item => item.id}
/>
);
};
export default MinhaLista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
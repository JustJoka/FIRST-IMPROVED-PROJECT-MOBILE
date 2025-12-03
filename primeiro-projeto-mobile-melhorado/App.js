import { useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';

export default function App() {
  const[count, setCount] = useState(0)
  const[titulo, setTitulo]= useState("Contador de cliques")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.count}>{count}</Text>

    <View style={styles.buttonContainer}>
      <Button title="-" onPress={() => setCount(count - 1)} />
      <Button title="+" onPress={() => setCount(count + 1)} />
      </View>

    <View style={styles.botoesMudar}>
      <Button title="Dia" onPress={() => setTitulo("Bom dia!")} />
      <Button title="Tarde" onPress={()=> setTitulo("Boa tarde!")} />
      <Button title="Noite" onPress={() => setTitulo("Boa noite!")} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  count: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  botoesMudar: {
    margin: 20,
    flexDirection: 'row',
    gap:10,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.acima}>
        <Text style={styles.texto}>Senai</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.abaixo}>
        <Text style={styles.texto}>Bosch</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0084',
    alignItems: 'center',
    justifyContent: 'center'
  },
  acima:{
    backgroundColor: '#fff',
    flex: 0.4,
    width:'90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  abaixo:{
    backgroundColor: '#ffc0dc',
    flex: 0.5,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto:{
    fontWeight: 'bold',
    fontSize: 30
  }
});

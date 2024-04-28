import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container]}>
      <View
      onTouchStart={(event)=>{
        Alert.alert('TOQUE', 'clique iniciado')
      }}
      onTouchEnd={(evento)=>{
        Alert.alert('TOQUE', 'Toque finalizado')
      }}
      >
        <Text style={[styles.texto,styles.border]}>Olá</Text>

      </View>

      <Text
      selectable={true} 
      style={[styles.texto, styles.border]}>Go run!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e15f41',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderColor: 'red',
    borderWidth: 3
  },
  texto: {
    fontSize:20,
    fontWeight:'bold',
    color:'#0abde3'
  }
  // ,
  // texto2: {
  //   fontSize:30,
  //   fontWeight:'bold',
  //   color:'#c8d6e5'
  // }
});

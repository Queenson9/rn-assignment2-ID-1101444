import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style={styles.boldFont}>Enock Queenson</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5a5a5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24
  },
  boldFont: {
    fontWeight: 'bold'
  }
});

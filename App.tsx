import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/screens/form.tsx';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
       <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

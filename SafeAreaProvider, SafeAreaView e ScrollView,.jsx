import {  StyleSheet, Text, View,Image, TextInput, ScrollView} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (

  <SafeAreaProvider style={{flex:1}}>
      <SafeAreaView style={{flex:1}}>
        <ScrollView style={{flex:1}}>
        <Text style={{ margin: 30 }}> Teste! </Text>
        <Text style={{ margin: 30 }}> Teste! </Text>
        <Text style={{ margin: 30 }}> Teste! </Text>
        <Text style={{ margin: 30 }}> Teste! </Text>
        <Text style={{ margin: 30 }}> Teste! </Text>
        <Text style={{ margin: 30 }}> Teste! </Text>
        <Text style={{ margin: 30 }}> Teste! </Text>
        <Text style={{ margin: 30 }}> Teste! </Text>
        <Text style={{ margin: 30 }}> Teste! </Text>
        <Text style={{ margin: 30 }}> Teste! </Text>
        <Text style={{ margin: 30 }}> Teste! </Text>
        <Text style={{ margin: 30 }}> Teste! </Text>
      </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>  
  
  );
}

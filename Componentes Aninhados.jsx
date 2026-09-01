import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View> 
    //primeiro input
      <View>
        <Text>Insira seu nome:</Text>
        <TextInput placeholder="seu nome aqui"></TextInput>
      </View>  
    </View>

    <View> 
      <View>
      //segundo input
        <Text>Insira seu email:</Text>
        <TextInput placeholder="seu email aqui"></TextInput>
      </View>  
    </View>
   
  );
}

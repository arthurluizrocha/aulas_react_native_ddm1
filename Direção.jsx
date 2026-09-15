import { StyleSheet, Text, View } from "react-native";


export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'lightblue'}}>

    {/*Cabeçalho */}
    <View style={{flexDirection:'row'}}>
    <View style={caixas.caixa1}> <Text> Caixa 1 </Text> </View>
    
     <View style={caixas.caixa2}> <Text> Caixa 2 </Text> </View>
    
     <View style={caixas.caixa3}> <Text> Caixa 3 </Text> </View>

     
    </View>

    {/*Conteúdo */}
    <View>
 <View style={caixas.caixa4}> <Text> Caixa 4 </Text> </View>
    
    
    </View>

    {/*Rodapé */}
    <View>

    
    
    </View>
    
    </View>

    
  );
}


const caixas = StyleSheet.create({
  caixa1: {
    backgroundColor: 'pink',
    width: '100%',
    height: 60
  
   
  },
  caixa2: {
    backgroundColor: 'purple',
    position:'absolute',
    marginLeft:60,

    
  },
  caixa3: {
    backgroundColor: 'yellow',
    position: 'absolute'
  
  },

  caixa4: {
    backgroundColor: 'blue',
    width: '90%',
    height: 250,
    margin: 20,
    marginTop: 20
  }
});

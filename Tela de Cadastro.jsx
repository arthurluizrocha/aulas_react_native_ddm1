import {Pressable, Button, StyleSheet, Text, View, Image,TextInput,} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#423338', justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Image
          source={{
            uri: 'https://w7.pngwing.com/pngs/573/903/png-transparent-rock-art-cave-painting-petroglyph-cave-fauna-wildlife-hare.png',
          }}
          style={{ width: 120, height: 150, margin: 20 }}
        />
      </View>
      <View>
      <Text style={{fontWeight: 'bold', fontSize: 35, color:'#D2B48C' , marginBottom: 20}}> Cadastre -se</Text>
        <Text>  Coloque seu email abaixo: </Text>
        <TextInput
          palceholder="seu e-mail"
          style={{
            borderWidth: 1,
            borderRadius: 3,
            margin: 20,
            padding: 20,
            color: '#ffffff',
             backgroundColor: '#ffffff'
            
          }}
        />  
        
        <Text> Insira sua senha abaixo: </Text>
        <TextInput
          secureTextEntry={true}
          palceholder="seu e-mail"
          style={{
            borderWidth: 1,
            borderRadius: 3,
            margin: 20,
            padding: 20,
            color: '#ffffff',
            backgroundColor: '#ffff'
            
          }}
        />

        <Text> Confirme sua senha abaixo: </Text>
        <TextInput
          secureTextEntry={true}
          palceholder="seu e-mail"
          style={{
            borderWidth: 1,
            borderRadius: 3,
            margin: 20,
            padding: 20,
            color: '#ffffff',
            backgroundColor: '#ffff'
            
          }}
        />


        <Button
          title="Criar conta"
          color="#D2B48C"
          
          onPress={() => {
            alert('Conta criada com sucesso!');
          }}
           />


        
      </View>
    </View>
  );
}

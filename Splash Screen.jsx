import { StyleSheet, Text, View,Image, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={estilo_tela.tela_pricipal}>
      <View>
        <Image
        source={require('./assets/logoddm.png')} 
        style={estilo_imagens.logo}
        />
        <Image
          source={require('./assets/artefundo.png')} 
          style={estilo_imagens.imagem_cima_direita} 
        />
        <Image 
          source={require('./assets/artefundo.png')} 
          style={estilo_imagens.imagem_cima_esquerda} 
        />
        <Image 
          source={require('./assets/artefundo.png')} 
          style={estilo_imagens.imagem_meio_direita} 
        />
        <Image 
          source={require('./assets/artefundo.png')} 
          style={estilo_imagens.imagem_meio_esquerda} 
        />
        <Image 
          source={require('./assets/artefundo.png')} 
          style={estilo_imagens.imagem_debaixo_direita} 
        />
        <Image 
          source={require('./assets/artefundo.png')} 
          style={estilo_imagens.imagem_debaixo_esquerda} 
        />
      </View>
      <View>
          <Text style={estilo_texto.titulo}>Inventário Rupestre</Text>
          <Text style={estilo_texto.subtitulo}>Preservando o passado na palma da sua mão</Text>
          <Text style={estilo_texto.escrita_rodapé}>v1.0 - Arthur Luiz</Text>
      </View>
      
    </View>   );
}

; 
const estilo_tela =StyleSheet.create ({
  tela_pricipal:{
    flex: 1, backgroundColor: '#423338', justifyContent: 'center', alignItems: 'center'
  }
})

const estilo_texto =StyleSheet.create ({
  titulo:{
   fontSize: 24, fontWeight: 'bold',zIndex: 1, color: '#D2B48C'
  },

  subtitulo: {
    fontSize: 12, fontWeight: 'bold',zIndex: 1, color: '#D2B48C'
  },

  escrita_rodapé:{
    fontSize: 18, fontWeight: 'bold',zIndex: 1, color: '#D2B48C',position: 'absolute', top: 280, left: 60
  }
})


const estilo_imagens = StyleSheet.create({
  logo:{
   width: 200, 
   height: 200, 
   zIndex: 1,
   tintColor: '#D2B48C'},

  imagem_cima_direita:{
     position: 'absolute', top:-250, left: 70, width: 300, height: 200
  }  ,

  imagem_cima_esquerda:{
  position: 'absolute',top: -280, right: 75, width: 300, height: 200 
  }  , 

  imagem_meio_direita:{
     position: 'absolute', top: 20, right: 75, width: 300, height: 200 
  },
     
  imagem_meio_esquerda:{
  position: 'absolute', top:-20, left: 75, width: 300, height: 200
  } ,

  imagem_debaixo_direita:{
    position: 'absolute', top: 300, left: 75, width: 300, height: 200
  },

  imagem_debaixo_esquerda:{
    position: 'absolute', top: 260, right: 75, width: 300, height: 200
  }     
    
});

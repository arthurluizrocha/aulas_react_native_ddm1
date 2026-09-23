import { StyleSheet, Text, View, Image } from 'react-native';

import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={estilo_tela.view_principal}>
      <Text style={estilo_texto.titulo}> App de Estudos </Text>
      <Image
        source={require('./assets/logobook.png')}
        style={estilo_imagem.logo}
      />
      <Text style={estilo_texto.legenda}>
        Organize provas, tarefas e revisões.
      </Text>

      <View style={estilo_tela.card1}>
        <Text style={estilo_texto.subtitulo}>Matemática</Text>
        <Text>Revisar funções para sexta-feira.</Text>
      </View>
      <View style={estilo_tela.card1}>
        <Text style={estilo_texto.subtitulo}>Historia</Text>
        <Text>Ler capitulo sobre Revolução Industrial.</Text>
      </View>
    </View>
  );
}

const estilo_tela = StyleSheet.create({
  view_principal: {
    margin: 30,
  },
  card1: {
    backgroundColor: '#ddd',
    padding: 12,
    marginTop: 10,
  },
});
const estilo_texto = StyleSheet.create({
  titulo: {
    marginBottom: 5,
    fontSize: 26,
    fontWeight: 'bold',
  },
  legenda: {
    color: '#666666',
    marginBottom: 20,
    marginTop: 5
  },
  subtitulo: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: 'bold',

    color: 'blue',
  },
});

const estilo_imagem = StyleSheet.create({
  logo: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

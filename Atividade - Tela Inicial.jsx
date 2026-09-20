import {
  Pressable,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={estilo_tela.safearea1}>
      <StatusBar style="light" />
      <SafeAreaView style={estilo_tela.safearea2}>
        <View style={estilo_tela.tela_pricipal}>
          <Pressable
            onPress={() => {
              alert('Tela de Login!');
            }}>
            <Image
              source={require('./assets/logoddm.png')}
              style={estilo_imagem.imagem_acesa}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              alert('Você já está na Tela inicial!');
            }}>
            <Image
              source={require('./assets/home.png')}
              style={estilo_imagem.imagem_apagada}
            />
          </Pressable>

          <Pressable
            onPress={() => {
              alert('Menu aberto com sucesso!');
            }}>
            <Image
              source={require('./assets/menu.png')}
              style={estilo_imagem.imagem_acesa}
            />
          </Pressable>
        </View>

        <ScrollView style={estilo_tela.scroll}>
          <Text style={estilo_texto.titulo}>Coleta de vestígios</Text>

          <View style={{ width: '100%' }}>
            <Text style={estilo_texto.texto_questionario}>
              Insira o nome do seu Sítio Arqueológico:
            </Text>
            <TextInput
              placeholder=" sítio arqueológico"
              style={estilo_texto.input}
            />

            <Text style={estilo_texto.texto_questionario}>
              Digite o código do Sítio Arqueológico:
            </Text>
            <TextInput placeholder="código" style={estilo_texto.input} />
            <Text style={estilo_texto.texto_questionario}>
              Insira o tipo de Vestígio:
            </Text>
            <TextInput
              placeholder=" tipo de vestígio"
              style={estilo_texto.input}
            />

            <Text style={estilo_texto.texto_questionario}>
              Descrição sobre o vestígio:
            </Text>
            <TextInput placeholder="descrição" style={estilo_texto.input} />
            <Text style={estilo_texto.texto_questionario}>
              Data e Hora de coleta do vestígio:
            </Text>
            <TextInput placeholder="data e hora" style={estilo_texto.input} />
            <Text style={estilo_texto.texto_questionario}>
              Insira o arquivo ou mídia do vestígio:
            </Text>
            <Button
              title="Arquivo"
              color="#D2B48C"
              onPress={() => {
                alert('Download do arquivo completo!');
              }}
            />

            <Text style={estilo_texto.texto_questionario2}>
              {' '}
              Registre o Vestígio no Inventário:{' '}
            </Text>
            <Button
              title="Registrar"
              color="#D2B48C"
              onPress={() => {
                alert('Registrado com com sucesso!');
              }}
            />

            <Pressable
              onPress={() => {
                alert('Inventário!');
              }}
              style={{ marginTop: 20, alignItems: 'center' }}>
              <Text style={{ color: '#D2B48C', fontWeight: 'bold' }}>
                {' '}
                Ver Inventário
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const estilo_tela = StyleSheet.create({
  safearea1: {
    flex: 1,
    backgroundColor: '#423338',
  },

  safearea2: {
    flex: 1,
  },

  tela_pricipal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D2B48C',
    position: 'relative',
  },

  scroll: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const estilo_texto = StyleSheet.create({
  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#D2B48C',
    margin: 20,
    textAlign: 'center',
  },

  texto_questionario: {
    color: '#D2B48C',
    marginBottom: 5,
  },

  texto_questionario2: {
    color: '#D2B48C',
    marginBottom: 5,
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 20,
    padding: 15,
    color: '#000000',
    backgroundColor: '#ffffff',
  },
});

const estilo_imagem = StyleSheet.create({
  imagem_acesa: {
    width: 60,
    height: 60,
    tintColor: '#D2B48C',
  },
  imagem_apagada: {
    width: 60,
    height: 60,
  },
});

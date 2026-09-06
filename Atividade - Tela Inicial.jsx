import { Pressable, Button, StyleSheet, Text, View, Image, TextInput, ScrollView, StatusBar} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#423338' }}>
    <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#D2B48C',
            position: 'relative',
          }}>
          <Pressable
            onPress={() => {
              alert('Tela de Login!');
            }}>
            <Image
              source={require('./assets/logoddm.png')}
              style={{ width: 60, height: 60, tintColor: '#D2B48C' }}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              alert('Você já está na Tela inicial!');
            }}>
            <Image
              source={require('./assets/home.png')}
              style={{ width: 60, height: 60 }}
            />
          </Pressable>

          <Pressable
            onPress={() => {
              alert('Menu aberto com sucesso!');
            }}>
            <Image
              source={require('./assets/menu.png')}
              style={{ width: 60, height: 60, tintColor: '#D2B48C' }}
            />
          </Pressable>
        </View>

        <ScrollView
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 34,
              fontWeight: 'bold',
              color: '#D2B48C',
              margin: 20,
              textAlign: 'center',
            }}>
            Coleta de vestígios
          </Text>

          <View style={{ width: '100%' }}>
            <Text style={{ color: '#D2B48C', marginBottom: 5 }}>
              Insira o nome do seu Sítio Arqueológico:
            </Text>
            <TextInput
              placeholder=" sítio arqueológico"
              style={{
                borderWidth: 1,
                borderRadius: 3,
                marginBottom: 20,
                padding: 15,
                color: '#000000',
                backgroundColor: '#ffffff',
              }}
            />

            <Text style={{ color: '#D2B48C', marginBottom: 5 }}>
              Digite o código do Sítio Arqueológico:
            </Text>
            <TextInput
              placeholder="código"
              style={{
                borderWidth: 1,
                borderRadius: 3,
                marginBottom: 20,
                padding: 15,
                color: '#000000',
                backgroundColor: '#ffffff',
              }}
            />
            <Text style={{ color: '#D2B48C', marginBottom: 5 }}>
              Insira o tipo de Vestígio:
            </Text>
            <TextInput
              placeholder=" tipo de vestígio"
              style={{
                borderWidth: 1,
                borderRadius: 3,
                marginBottom: 20,
                padding: 15,
                color: '#000000',
                backgroundColor: '#ffffff',
              }}
            />

            <Text style={{ color: '#D2B48C', marginBottom: 5 }}>
              Descrição sobre o vestígio:
            </Text>
            <TextInput
              placeholder="descrição"
              style={{
                borderWidth: 1,
                borderRadius: 3,
                marginBottom: 20,
                padding: 15,
                color: '#000000',
                backgroundColor: '#ffffff',
              }}
            />
            <Text style={{ color: '#D2B48C', marginBottom: 5 }}>
              Data e Hora de coleta do vestígio:
            </Text>
            <TextInput
              placeholder="data e hora"
              style={{
                borderWidth: 1,
                borderRadius: 3,
                marginBottom: 20,
                padding: 15,
                color: '#000000',
                backgroundColor: '#ffffff',
              }}
            />
            <Text style={{ color: '#D2B48C', marginBottom: 5 }}>
              Insira o arquivo ou mídia do vestígio:
            </Text>
            <Button
              title="Arquivo"
              color="#D2B48C"
              onPress={() => {
                alert('Download do arquivo completo!');
              }}
            />

            <Text style={{ color: '#D2B48C', marginBottom: 5, marginTop: 20 }}>
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
              <Text style={{ color: '#D2B48C', fontWeight: 'bold' }}> Ver Inventário</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

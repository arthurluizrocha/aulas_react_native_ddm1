import { Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [cliquesA, atualizarCliquesA] = useState(0);
  const [cliquesB, atualizarCliquesB] = useState(0);

  const LIMITE_PONTOS = 12;

  const apertarMaisA = () => {
    const novoValor = cliquesA + 1;
    if (novoValor >= LIMITE_PONTOS) {
      window.alert('Time A Venceu a partida!');
    }
    atualizarCliquesA(Math.max(0, novoValor));
  };

  const apertarMenosA = () => {
    atualizarCliquesA(Math.max(0, cliquesA - 1));
  };

  const apertarMaisB = () => {
    const novoValor = cliquesB + 1;
    if (novoValor >= LIMITE_PONTOS) {
      window.alert('Time B Venceu a partida!');
    }
    atualizarCliquesB(Math.max(0, novoValor));
  };

  const apertarMenosB = () => {
    atualizarCliquesB(Math.max(0, cliquesB - 1));
  };

  const reiniciarPlacar = () => {
    atualizarCliquesA(0);
    atualizarCliquesB(0);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 80}}>
        Jogo de Ping-pong
      </Text>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 30 }}>
        PLACAR
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          marginBottom: 30,
        }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Time A</Text>
          <Text style={{ fontSize: 24, marginVertical: 10 }}>{cliquesA}</Text>
          <Pressable
            onPress={apertarMaisA}
            style={{ backgroundColor: 'blue', padding: 10, margin: 5 }}>
            <Text style={{ color: 'white' }}>Apertar</Text>
          </Pressable>
          <Pressable
            onPress={apertarMenosA}
            style={{ backgroundColor: 'blue', padding: 10 }}>
            <Text style={{ color: 'white' }}>Menos</Text>
          </Pressable>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Time B</Text>
          <Text style={{ fontSize: 24, marginVertical: 10 }}>{cliquesB}</Text>
          <Pressable
            onPress={apertarMaisB}
            style={{ backgroundColor: 'blue', padding: 10, margin: 5 }}>
            <Text style={{ color: 'white' }}>Mais</Text>
          </Pressable>
          <Pressable
            onPress={apertarMenosB}
            style={{ backgroundColor: 'blue', padding: 10 }}>
            <Text style={{ color: 'white' }}>Menos</Text>
          </Pressable>
        </View>
      </View>

      <Pressable
        onPress={reiniciarPlacar}
        style={{ backgroundColor: 'gray', padding: 10 }}>
        <Text style={{ color: 'white' }}>Zerar</Text>
      </Pressable>
    </View>
  );
}

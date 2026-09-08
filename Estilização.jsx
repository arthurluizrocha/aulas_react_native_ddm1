import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={estilo_geral.corpo_tela}>
      <Text style={estilo_text.titulo}>Titulo</Text>
      <Text style={estilo_text.paragrafo}>ntrodução à Era DigitalA tecnologia mudou a forma como vivemos, trabalhamos e nos comunicamos. Antigamente, as informações viajavam devagar por cartas e jornais impressos. Hoje, a internet conecta bilhões de pessoas em segundos. Esse salto transformou a sociedade moderna de maneira profunda.O Papel da Inteligência ArtificialA inteligência artificial (IA) é o passo mais recente dessa revolução. Ela permite que máquinas aprendam com dados e tomem decisões sozinhas.Na saúde: médicos usam IA para detectar doenças mais cedo.Na educação: ferramentas adaptam o ensino para cada aluno.No trabalho: tarefas repetitivas são automatizadas, liberando tempo para a criatividade.</Text>
    </View>
  );
}
const estilo_geral = StyleSheet.create({
  corpo_tela: {
  flex:1,
  backgroundColor:'red'}

});
const estilo_text = StyleSheet.create({
  paragrafo:{
    fontSize: 12,
    fontWeight: '100', 
    fontStyle: 'italic ',
    textAlign: 'auto',
    color: 'lightyellow' },

  titulo:{
    fontSize:20,
    fontWeight: 'bold'
  }  
    
});

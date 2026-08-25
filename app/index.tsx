import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import QuizScreen from '@/components/QuizScreen';

export default function Index() {
  const [iniciou, setIniciou] = useState(false);

  if (iniciou) {
    return <QuizScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Venha fazer um Quiz de Basquete 🏀</Text>
        <Text style={styles.subtitulo}>
          Você se diz fã, mas nem sabe quem fez o primeiro ponto da história da NBA?
        </Text>
        <TouchableOpacity style={styles.botaoAcao} onPress={() => setIniciou(true)}>
          <Text style={styles.textoBotao}>Iniciar Quiz</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  card: {
    width: '90%',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 32,
    textAlign: 'center',
    fontWeight: '400',
  },
  botaoAcao: {
    paddingVertical: 16,
    backgroundColor: '#000000',
    alignItems: 'center',
    borderRadius: 10,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
import React, { useState, useRef, useEffect } from 'react';

// useref- para armazenar valores que persistem entre as renderizações sem disparar uma nova renderização da tela quando são alterados (diferente do useState).

//


import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Vibration, Animated } from 'react-native';
import { Audio } from 'expo-av'
// Importa o arquivo de perguntas
import questions from '@/questions.json'

// 1. Tipagem das perguntas do  JSON
interface Pergunta {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
}

export default function QuizScreen() {





    //USE STATE PARA O PROJETO(futuro guilherme essa parte controla esse projeto)

    const [indiceAtual, setIndiceAtual] = useState(0);
    const [pontos, setPontos] = useState(0);
    const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);
    const [quizFinalizado, setQuizFinalizado] = useState(false);




    // Valor animado para controlar a posição horizontal da tela
    const shakeAnim = useRef(new Animated.Value(0)).current;

    const handleErro = () => {

        // 1. Aciona a vibração 
        Vibration.vibrate(500);

        // 2. Executa a animação de "tremer"
        Animated.sequence([
            Animated.timing(shakeAnim, { toValue: 15, duration: 10, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: -15, duration: 10, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 15, duration: 10, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 0, duration: 10, useNativeDriver: true }),
        ]).start();
    };

  
    const listaPerguntas: Pergunta[] = questions;
    const perguntaAtual = listaPerguntas[indiceAtual];

    const selecionarResposta = (opcao: string) => {
        if (respostaSelecionada !== null) return;

        setRespostaSelecionada(opcao);
        if (opcao === perguntaAtual.correctAnswer) {
            setPontos((prev) => prev + 1);
        }
    };

    const proximoPasso = () => {
        setRespostaSelecionada(null);

        if (indiceAtual + 1 < listaPerguntas.length) {
            setIndiceAtual((prev) => prev + 1);
        } else {
            setQuizFinalizado(true);
        }
    };

    const reiniciar = () => {
        setIndiceAtual(0);
        setPontos(0);
        setRespostaSelecionada(null);
        setQuizFinalizado(false);
    };

    if (quizFinalizado) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.titulo}>É o fim fã de Basqueste 🏀</Text>
                    <Text style={styles.subtitulo}>
                        Você acertou {pontos} de {listaPerguntas.length} perguntas.
                    </Text>
                    <TouchableOpacity style={styles.botaoAcao} onPress={reiniciar}>
                        <Text style={styles.textoBotao}>Jogar Novamente</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }


    else {

        <SafeAreaView style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.titulo}>Venha fazer um Quiz de Basqueste</Text>
                    <Text style={styles.subtitulo}>
                        Você se diz fã, mas nem sabe quem fez o primeiro ponto da história da NBA?
                    </Text>
                    <TouchableOpacity style={styles.botaoAcao} onPress={reiniciar}>
                        <Text style={styles.textoBotao}>Jogar Novamente</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>


    }



    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.card, { transform: [{ translateX: shakeAnim }] }]}>
                <Text style={styles.progresso}>
                    Pergunta {indiceAtual + 1} de {listaPerguntas.length}
                </Text>
                <Text style={styles.pergunta}>{perguntaAtual.question}</Text>

                <View style={styles.listaOpcoes}>
                    {perguntaAtual.options.map((opcao) => {
                        const foiSelecionada = respostaSelecionada === opcao;
                        const ehCorreta = opcao === perguntaAtual.correctAnswer;

                        let estiloBotao = styles.opcaoBotao;

                        if (respostaSelecionada !== null) {
                            if (ehCorreta) {
                                estiloBotao = { ...estiloBotao, ...styles.correta }
                            }
                            else if (foiSelecionada) {
                                estiloBotao = { ...estiloBotao, ...styles.errada }
                                 
                            
                               handleErro()
                              

                            }



                        }

                        return (
                            <TouchableOpacity
                                key={opcao}
                                disabled={respostaSelecionada !== null}
                                style={estiloBotao}
                                onPress={() => selecionarResposta(opcao)}
                            >
                                <Text style={styles.textoOpcao}>{opcao}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                {respostaSelecionada !== null && (
                    <TouchableOpacity style={styles.botaoAcao} onPress={proximoPasso}>
                        <Text style={styles.textoBotao}>
                            {indiceAtual + 1 === listaPerguntas.length ? 'Ver Resultado' : 'Próxima Pergunta'}
                        </Text>
                    </TouchableOpacity>
                )}
            </Animated.View>
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
    progresso: {
        fontSize: 12,
        color: '#999999',
        marginBottom: 24,
        fontWeight: '500',
        letterSpacing: 1,
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
    pergunta: {
        fontSize: 19,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 24,
        lineHeight: 26,
    },
    listaOpcoes: {
        gap: 10,
        marginBottom: 24,
    },
    opcaoBotao: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        backgroundColor: '#FFFFFF',
        borderRadius: 10
    },
    correta: {
        backgroundColor: '#67f05d2c',
        borderColor: '#40f70d',
        borderWidth: 1,

    },
    errada: {
        backgroundColor: '#df0b0b2e',
        borderColor: '#f70d0d',
        borderWidth: 1,
    },
    textoOpcao: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '400',
    },
    textoOpcaoCorreta: {
        color: '#FFFFFF',
        fontWeight: '600',
    },
    textoOpcaoErrada: {
        color: '#000000',
        textDecorationLine: 'line-through',
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
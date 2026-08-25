# 🏀 HoopQuiz Mobile

> Um aplicativo mobile de quiz interativo sobre basquete e história da NBA, desenvolvido em **React Native** com **Expo**.

---

## 📸 Sobre o Projeto

O **HoopQuiz** é um aplicativo leve, dinâmico e focado em testar os conhecimentos dos verdadeiros fãs de basquete. O projeto conta com feedback visual imediato para respostas certas e erradas, animações fluidas de erro baseadas em `Animated` do React Native, feedback tátil via `Vibration`, e gerenciamento de estado limpo.

---

## ✨ Funcionalidades

* 📱 **Interface Moderna e Minimalista:** Design limpo focado na experiência do usuário (UI/UX)[cite: 1, 2].
* 🎯 **Feedback Dinâmico:** Destaque automático para alternativas corretas e incorretas após a seleção[cite: 1].
* 📳 **Animações e Vibração:** Efeito visual de tremor (*shake*) acoplado a vibração física no dispositivo ao errar uma questão[cite: 1].
* 📊 **Tela de Resultados:** Resumo da pontuação final com opção de reiniciar o desafio instantaneamente[cite: 1].
* 🔄 **Arquitetura Modular:** Componentes separados entre a tela inicial (*Index*) e o fluxo principal do Quiz (`QuizScreen`)[cite: 1, 2].

---

## 🌟 Funcionalidade Adicional: Animações e Feedback Tátil (Shake & Vibration)

### Descrição
Para tornar a experiência do usuário mais imersiva e responsiva, foi implementada uma camada de animação baseada na API nativa `Animated` em conjunto com a biblioteca `expo-haptics/Vibration`. Sempre que o usuário seleciona uma resposta incorreta, o aplicativo aciona uma vibração de alerta e executa um efeito visual de tremor horizontal (*shake*) diretamente no cartão da pergunta[cite: 1].

### Desafios e Aprendizados
Durante o desenvolvimento desta melhoria, foi necessário pesquisar o funcionamento de referências mutáveis com o Hook `useRef` para instanciar os valores animados sem disparar re-renderizações desnecessárias da tela[cite: 1]. Aprendemos a coordenar sequências de animações lineares (`Animated.sequence` e `Animated.timing`) com a propriedade `useNativeDriver: true` para garantir desempenho fluido de 60 FPS em dispositivos móveis, além de gerenciar estados condicionais para disparar o gatilho de erro apenas no momento exato da escolha da alternativa errada.

### Demonstração
*O comportamento visual e o feedback tátil podem ser testados diretamente em tempo de execução no aplicativo Expo Go ao interagir com as opções de respostas incorretas do quiz*

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

* **[React Native](https://reactnative.dev/)**
* **[Expo](https://expo.dev/)**
* **React Hooks** (`useState`, `useRef`, `useEffect`)
* **React Native Animated API**
* **Expo AV & Vibration**



---

## 📂 Estrutura do Código

O projeto é dividido em dois fluxos principais:

1. **`Index.tsx`**: Tela de boas-vindas (*Landing/Home*) que convida o usuário para o desafio antes de montar a árvore de componentes do quiz.
2. **`QuizScreen.tsx`**: Tela centralizadora da lógica do quiz, mapeando o arquivo externo de perguntas (`questions.json`), validando pontuações, controlando o fluxo de avanços e tratando efeitos interativos (vibração e animações).

---


![Demonstração do HoopQuiz](../quiz-app/assets/images/hooper.gif)





## 🚀 Como Executar o Projeto

Certifique-se de ter o **Node.js** e o aplicativo **Expo Go** (instalado no seu smartphone) ou um emulador configurado em sua máquina.

1. Clone o repositório ou copie os arquivos para sua máquina:
   ```bash
   git clone [https://github.com/Glcost/HoopQuiz-app.git.git](https://github.com/Glcost/HoopQuiz-app.git.git)
   cd hoop-quiz
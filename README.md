# 🏀 HoopQuiz Mobile

> Um aplicativo mobile de quiz interativo sobre basquete e história da NBA, desenvolvido em **React Native** com **Expo**.

---

## 📸 Sobre o Projeto

O **HoopQuiz** é um aplicativo leve, dinâmico e focado em testar os conhecimentos dos verdadeiros fãs de basquete. O projeto conta com feedback visual imediato para respostas certas e erradas, animações fluidas de erro baseadas em `Animated` do React Native, feedback tátil via `Vibration`, e gerenciamento de estado limpo.

---

## ✨ Funcionalidades

* 📱 **Interface Moderna e Minimalista:** Design limpo focado na experiência do usuário (UI/UX).
* 🎯 **Feedback Dinâmico:** Destaque automático para alternativas corretas e incorretas após a seleção.
* 📳 **Animações e Vibração:** Efeito visual de tremor (*shake*) acoplado a vibração física no dispositivo ao errar uma questão.
* 📊 **Tela de Resultados:** Resumo da pontuação final com opção de reiniciar o desafio instantaneamente.
* 🔄 **Arquitetura Modular:** Componentes separados entre a tela inicial (*Index*) e o fluxo principal do Quiz (`QuizScreen`).

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

## 🚀 Como Executar o Projeto

Certifique-se de ter o **Node.js** e o aplicativo **Expo Go** (instalado no seu smartphone) ou um emulador configurado em sua máquina.

1. Clone o repositório ou copie os arquivos para sua máquina:
   ```bash
   git clone [https://github.com/Glcost/quiz-app.git.git](https://github.com/Glcost/quiz-app.git.git)
   cd hoop-quiz
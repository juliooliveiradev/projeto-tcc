import React, { useState, useEffect } from 'react';
import './App.css';

import Start from './components/Start';
import Question from './components/Question';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4'
import End from './components/End';
import End2 from './components/End2';
import End3 from './components/End3';
import End4 from './components/End4'
import quizData from './data/quiz.json';
import quiz2Data from './data/quiz2.json';
import quiz3Data from './data/quiz3.json';
import quiz4Data from './data/quiz4.json'

let interval;

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [userInput1, setUserInput1] = useState('');
  const [time, setTime] = useState(0);
  const [sequenceString, setSequenceString] = useState('');
  const [selectedChoice, setSelectedChoice] = useState('');

  useEffect(() => {
    if (step === 5 || step === 6 || step === 7) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    alert("Nesta Etapa, veremos o princípio de algoritmos, onde para executar uma ação, faremos uma sequência de instruções para executar a tal ação. Utilizaremos um quiz para sequenciar essas instruções.");
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quiz2StartHandler = () => {
    setStep(3);
    alert("Nesta Etapa, veremos o princípio de algoritmos, onde para executar uma ação, faremos uma sequência de instruções para executar a tal ação. Utilizaremos um quiz para sequenciar essas instruções.");
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quiz3StartHandler = () => {
    setStep(4);
    alert("Nesta Etapa, veremos o princípio de algoritmos, onde para executar uma ação, faremos uma sequência de instruções para executar a tal ação. Utilizaremos um quiz para sequenciar essas instruções.");
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quiz4StartHandler = () => {
    setStep(8);
    alert("Nesta Etapa, veremos o principio de algoritmos onde que para executar uma ação, farememos uma sequencia de instrucoes para executar a tal ação, utiliaremos um quiz para sequenciar essas instrções.");
    interval = setInterval(() => {
    setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(1);
    setTime(0);
    setSequenceString(''); // Resetar a sequência quando reiniciar
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return (
    <div className="App">
      {step === 1 && <Start 
        onQuizStart={quizStartHandler}
        onQuiz2Start={quiz2StartHandler}
        onQuiz3Start={quiz3StartHandler}
        onQuiz4Start={quiz4StartHandler} 
 
      />}
      {step === 2 && <Question 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        onConcatIndex={setSequenceString}
      />}
      {step === 3 && <Question2 
        data={quiz2Data.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quiz2Data.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        onConcatIndex={setSequenceString}
      />}
      {step === 4 && <Question3 
        data={quiz3Data.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quiz3Data.data.length}
        selectedChoice={selectedChoice}
        setSelectedChoice={setSelectedChoice}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        onConcatIndex={setSequenceString}
      />}
      {step === 5 && <End 
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        time={time}
        sequence={sequenceString}  
        />}
      {step === 6 && <End2 
        results={answers}
        data={quiz2Data.data}
        onReset={resetClickHandler}
        time={time}
        sequence={sequenceString}
      />}
      {step === 7 && <End3 
        results={answers}
        data={quiz3Data.data}
        onReset={resetClickHandler}
        time={time}
        sequence={sequenceString}
      />}
      {step === 8 && <Question4 
        data={quiz4Data.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quiz4Data.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        onConcatIndex={setSequenceString}
        userInput={userInput}
        onSetUserInput={setUserInput}
        userInput1={userInput1}
        onSetUserInput1={setUserInput1}
      />}
      {step === 9 && <End4 
        results={answers}
        data={quiz3Data.data}
        onReset={resetClickHandler}
        time={time}
        sequence={sequenceString}
        userInput= {userInput}
        userInput1= {userInput1}
      />}
    </div>
  );
}

export default App;


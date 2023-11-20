import React, { useState, useEffect } from 'react';
import './App.css';

import Start from './components/Start';
import Question from './components/Question';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import End from './components/End';
import End2 from './components/End2';
import End3 from './components/End3';
import Modal from './components/Modal';
import Modal2 from './components/Modal2';
import Modal3 from './components/Modal3';
import quizData from './data/quiz.json';
import quiz2Data from './data/quiz2.json';
import quiz3Data from './data/quiz3.json';

let interval;

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [time, setTime] = useState(0);
  const [sequence, setSequence] = useState('');

  useEffect(() => {
    if(step === 5 || step === 6 || step === 7) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    alert("Nesta Etapa, veremos o principio de algoritmos onde que para executar uma ação, farememos uma sequencia de instrucoes para executar a tal ação, utiliaremos um quiz para sequenciar essas instrções.");
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quiz2StartHandler = () => {
    setStep(3);
    alert("Nesta Etapa, veremos o principio de algoritmos onde que para executar uma ação, farememos uma sequencia de instrucoes para executar a tal ação, utiliaremos um quiz para sequenciar essas instrções.");
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quiz3StartHandler = () => {
    setStep(4);
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
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return (
    <div className="App">
      {step === 1 && <Start 
      onQuizStart={quizStartHandler}
      onQuiz2Start={quiz2StartHandler}
      onQuiz3Start={quiz3StartHandler} />}
      {step === 2 && <Question 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <Question2 
        data={quiz2Data.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quiz2Data.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
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
        onConcatIndex = {setSequence}
      />}
      {step === 5 && <End 
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}
      {step === 6 && <End2 
        results={answers}
        data={quiz2Data.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal2(true)}
        time={time}
      />}
      {step === 7 && <End3 
        results={answers}
        data={quiz3Data.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal3(true)}
        time={time}
      />}
      {showModal && <Modal
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizData.data}
      />}
      {showModal2 && <Modal2
        onClose={() => setShowModal2(false)}
        results={answers}
        data={quiz2Data.data}
      />}
      {showModal3 && <Modal3
        onClose={() => setShowModal3(false)}
        results={answers}
        data={quiz3Data.data}
      />}
    </div>
  );
}

export default App;

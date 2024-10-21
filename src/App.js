import React, { useState, useEffect } from 'react';
import './App.css';

import Start from './components/Start';
import Question from './components/Question';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Question5 from './components/Question5';
import Question6 from './components/Question6';
import Question7 from './components/Question7';
import Question8 from './components/Question8';
import Question9 from './components/Question9';
import Question10 from './components/Question10';
import Question11 from './components/Question11';
import Question12 from './components/Question12';
import End from './components/End';
import End2 from './components/End2';
import End3 from './components/End3';
import End4 from './components/End4';
import End5 from './components/End5';
import End6 from './components/End6';
import End7 from './components/End7';
import End8 from './components/End8';
import End9 from './components/End9';
import End10 from './components/End10';
import End11 from './components/End11';
import End12 from './components/End12';
import quizData from './data/quiz.json';
import quiz2Data from './data/quiz2.json';
import quiz3Data from './data/quiz3.json';
import quiz4Data from './data/quiz4.json';
import quiz5Data from './data/quiz5.json';
import quiz6Data from './data/quiz6.json';
import quiz7Data from './data/quiz7.json';
import quiz8Data from './data/quiz8.json';
import quiz9Data from './data/quiz9.json';
import quiz10Data from './data/quiz10.json';
import quiz11Data from './data/quiz11.json';
import quiz12Data from './data/quiz12.json';
import Modal from './components/Modal'
import Modal2 from './components/Modal2'
import Modal3 from './components/Modal3';






let interval;

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [userInput1, setUserInput1] = useState('');
  const [vetorOutput, setVetorOutput] = useState([]);
  const [vetorOutput1, setVetorOutput1] = useState([]);
  const [numberInput,setNumberInput] = useState(0);
  const [time, setTime] = useState(0);
  const [sequenceString, setSequenceString] = useState('');
  const [selectedChoice, setSelectedChoice] = useState('');
  const [indexInput, setIndexInput] = useState(0);
  const [indexInput1, setIndexInput1] = useState(0);
  const [numberInput1, setNumberInput1] = useState(0);
  const [termo1, setTermo1] = useState(0);
  const [termo2, setTermo2] = useState(1);
  const [prox, setProx] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);



  useEffect(() => {
    if (step === 5 || step === 6 || step === 7 || step === 9) {
      clearInterval(interval);
    }
  }, [step]);

  const closeModal = () => {
    setShowModal(false);
  }

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal2 = () => {
    setShowModal2(false);
  }

  const openModal2 = () => {
    setShowModal2(true);
  }

  const closeModal3 = () => {
    setShowModal3(false);
  }

  const openModal3 = () => {
    setShowModal3(true);
  }

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
  const quiz5StartHandler = () => {
    setStep(9);
    alert("Nesta Etapa, veremos o principio de algoritmos onde que para executar uma ação, farememos uma sequencia de instrucoes para executar a tal ação, utiliaremos um quiz para sequenciar essas instrções.");
    interval = setInterval(() => {
    setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quiz6StartHandler = () => {
    setStep(10);
    alert("Nesta Etapa, veremos o principio de algoritmos onde que para executar uma ação, farememos uma sequencia de instrucoes para executar a tal ação, utiliaremos um quiz para sequenciar essas instrções.");
    interval = setInterval(() => {
    setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quiz7StartHandler = () => {
    setStep(11);
    setIndexInput(1);
    alert("Nesta Etapa, veremos o principio de algoritmos onde que para executar uma ação, farememos uma sequencia de instrucoes para executar a tal ação, utiliaremos um quiz para sequenciar essas instrções.");
    interval = setInterval(() => {
    setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quiz8StartHandler = () => {
    setStep(12);
    setIndexInput(1);
    alert("Nesta Etapa, veremos o principio de algoritmos onde que para executar uma ação, farememos uma sequencia de instrucoes para executar a tal ação, utiliaremos um quiz para sequenciar essas instrções.");
    interval = setInterval(() => {
    setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quiz9StartHandler = () => {
    setStep(13);
    setIndexInput(2);
    alert("Nesta Etapa, veremos o principio de algoritmos onde que para executar uma ação, farememos uma sequencia de instrucoes para executar a tal ação, utiliaremos um quiz para sequenciar essas instrções.");
    interval = setInterval(() => {
    setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quiz10StartHandler = () => {
    setStep(14);
    alert("Nesta Etapa, veremos o principio de algoritmos onde que para executar uma ação, farememos uma sequencia de instrucoes para executar a tal ação, utiliaremos um quiz para sequenciar essas instrções.");
    interval = setInterval(() => {
    setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quiz11StartHandler = () => {
    setStep(15);
    alert("Nesta Etapa, veremos o principio de algoritmos onde que para executar uma ação, farememos uma sequencia de instrucoes para executar a tal ação, utiliaremos um quiz para sequenciar essas instrções.");
    interval = setInterval(() => {
    setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quiz12StartHandler = () => {
    setStep(16);
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
    setNumberInput(0);
    setSequenceString(''); // Resetar a sequência quando reiniciar
    setUserInput('');
    setUserInput1('');
    setVetorOutput([]);
    setVetorOutput1([]);
    setIndexInput(0);
    setIndexInput1(0);
    setNumberInput1(0);
    setTermo1(0);
    setTermo2(1);
    setProx(0);
    clearInterval();
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
        onQuiz5Start={quiz5StartHandler}
        onQuiz6Start={quiz6StartHandler}
        onQuiz7Start={quiz7StartHandler}
        onQuiz8Start={quiz8StartHandler}
        onQuiz9Start={quiz9StartHandler}
        onQuiz10Start={quiz10StartHandler}
        onQuiz11Start={quiz11StartHandler}
        onQuiz12Start={quiz12StartHandler}
        on3thStepStart={openModal}
        on4thStepStart={openModal2}
        on5thStepStart={openModal3}

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
      {step === 9 && <Question5 
        data={quiz5Data.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quiz5Data.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        onConcatIndex={setSequenceString}
        numberInput={numberInput}
        onSetNumberInput={setNumberInput}
        vetorOutput={vetorOutput}
        onSetVetorOutput={setVetorOutput}
        indexInput={indexInput}
        onSetIndexInput={setIndexInput}
      />}
      {step === 10 && <Question6 
        data={quiz6Data.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quiz6Data.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        onConcatIndex={setSequenceString}
        numberInput={numberInput}
        onSetNumberInput={setNumberInput}
        vetorOutput={vetorOutput}
        onSetVetorOutput={setVetorOutput}
        indexInput={indexInput}
        onSetIndexInput={setIndexInput}
      />}
      {step === 11 && <Question7 
        data={quiz7Data.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quiz7Data.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        onConcatIndex={setSequenceString}
        numberInput={numberInput}
        onSetNumberInput={setNumberInput}
        indexInput={indexInput}
        onSetIndexInput={setIndexInput}
      />}
      {step === 12 && <Question8 
        data={quiz8Data.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quiz8Data.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        onConcatIndex={setSequenceString}
        numberInput={numberInput}
        onSetNumberInput={setNumberInput}
        numberInput1={numberInput1}
        onSetNumberInput1={setNumberInput1}
        indexInput={indexInput}
        onSetIndexInput={setIndexInput}
      />}
      {step === 13 && < Question9 
        data={quiz9Data.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quiz9Data.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        onConcatIndex={setSequenceString}
        numberInput={numberInput}
        onSetNumberInput={setNumberInput}
        indexInput={indexInput}
        onSetIndexInput={setIndexInput}
        vetorOutput={vetorOutput}
        onSetVetorOutput={setVetorOutput}
        termo1={termo1}
        onSetTermo1={setTermo1}
        termo2={termo2}
        onSetTermo2={setTermo2}
        prox={prox}
        onSetProx={setProx}
      />}
      {step === 14 && <Question10 
        data={quiz10Data.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quiz10Data.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        onConcatIndex={setSequenceString}
        numberInput={numberInput}
        onSetNumberInput={setNumberInput}
        indexInput={indexInput}
        onSetIndexInput={setIndexInput}
      />}
      {step === 15 && <Question11 
        data={quiz11Data.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quiz11Data.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        onConcatIndex={setSequenceString}
        numberInput={numberInput}
        onSetNumberInput={setNumberInput}
        indexInput={indexInput}
        onSetIndexInput={setIndexInput}
        indexInput1={indexInput1}
        onSetIndexInput1={setIndexInput1}
        vetorOutput1={vetorOutput1}
        onSetVetorOutput1={setVetorOutput1}
        vetorOutput={vetorOutput}
        onSetVetorOutput={setVetorOutput}
      />}
      {step === 16 && <Question12 
        data={quiz12Data.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quiz12Data.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        onConcatIndex={setSequenceString}
        numberInput={numberInput}
        onSetNumberInput={setNumberInput}
        indexInput={indexInput}
        onSetIndexInput={setIndexInput}
        userInput={userInput}
        onSetUserInput={setUserInput}
      />}
      {step === 17 && <End4 
        results={answers}
        onReset={resetClickHandler}
        time={time}
        sequence={sequenceString}
        userInput= {userInput}
        userInput1= {userInput1}
      />}
      {step === 18 && <End5 
        results={answers}
        onReset={resetClickHandler}
        time={time}
        sequence={sequenceString}
        numberInput= {numberInput}
        vetorOutput= {vetorOutput}
      />}
      {step === 19 && <End6 
        results={answers}
        onReset={resetClickHandler}
        time={time}
        sequence={sequenceString}
        numberInput= {numberInput}
        vetorOutput= {vetorOutput}
      />}
      {step === 20 && <End7 
        results={answers}
        onReset={resetClickHandler}
        time={time}
        sequence={sequenceString}
        numberInput= {numberInput}
        vetorOutput= {vetorOutput}
      />}
      {step === 21 && <End8 
        results={answers}
        onReset={resetClickHandler}
        time={time}
        sequence={sequenceString}
        numberInput= {numberInput}
        numberInput1= {numberInput1}
      />}
      {step === 22 && <End9 
        results={answers}
        onReset={resetClickHandler}
        time={time}
        sequence={sequenceString}
        numberInput= {numberInput}
        indexInput={indexInput}
        vetorOutput = {vetorOutput}
      />}
      {step === 23 && <End10 
        results={answers}
        onReset={resetClickHandler}
        time={time}
        sequence={sequenceString}
        numberInput= {numberInput}
      />}
      {step === 24 && <End11 
        results={answers}
        onReset={resetClickHandler}
        time={time}
        sequence={sequenceString}
        numberInput= {numberInput}
        vetorOutput = {vetorOutput}
      />}
      {step === 25 && <End12 
        results={answers}
        onReset={resetClickHandler}
        time={time}
        sequence={sequenceString}
        userInput={userInput}
        vetorOutput = {vetorOutput}
      />}
      {showModal && <Modal
        onClose={closeModal} 
     />}
     {showModal2 && <Modal2
        onClose={closeModal2} 
     />}
     {showModal3 && <Modal3
        onClose={closeModal3} 
     />}
  
    </div>
  );
}

export default App;


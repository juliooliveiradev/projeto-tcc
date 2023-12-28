import React, { useState, useEffect, useRef } from 'react';
import './Question.css'; // Substitua 'NomeDoArquivo' pelo nome real do seu arquivo CSS
import img1 from '../images/SegundaEtapa/Question11/Action2.jpg';
import img2 from '../images/SegundaEtapa/Question11/codigo2.jpg';

const Question11 = ({ data,
    onAnswerUpdate,
    numberOfQuestions,
    activeQuestion,
    onSetActiveQuestion,
    onSetStep,
    onConcatIndex,
    numberInput,
    onSetNumberInput,
    indexInput,
    onSetIndexInput,
    indexInput1,
    onSetIndexInput1,
    vetorOutput1,
    onSetVetorOutput1,
    vetorOutput,
    onSetVetorOutput }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const [answered, setAnswered] = useState(false);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
  const [sequenceString, setSequenceString] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
    setSelected('');
    setError('');
    setAnswered(false);
    setCorrectAnswerIndex(data.choices.indexOf(data.answer));

    // Atualiza a sequência de perguntas respondidas
    setSequenceString((prevSequence) => prevSequence + (activeQuestion + 1) + ' ');
  }, [data, activeQuestion]);

  const changeHandler = (e) => {
    if (!answered) {
      setSelected(e.target.value);
      if (error) {
        setError('');
      }
    }
  };

  const checkAnswer = () => {
    return selected === data.answer;
  };

  const calculateBinaryVector = (n) => {
    const binaryVector = [];
    while (n !== 0) {
      binaryVector.push(n % 2);
      n = Math.trunc(n / 2);
    }
    return binaryVector.reverse();
  };

  const nextClickHandler = () => {
    if (!selected) {
      return setError('Por favor, selecione uma opção!');
    }
  
    const isCorrect = checkAnswer();
  
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected, correct: isCorrect }]);
    setAnswered(false);
  
    onConcatIndex((prevSequence) => prevSequence + (activeQuestion + 1) + ' ');
  
    if (activeQuestion === 0) {
      const inputNumber = prompt("Por favor, digite um valor de N: ");
      onSetNumberInput(inputNumber);
      onSetIndexInput(inputNumber);
      console.log("indexInput " + inputNumber);
    }
  
    if (activeQuestion === 4) {
      const newIndexInput = Math.trunc(indexInput / 2);
      onSetIndexInput(newIndexInput);
      console.log("indexInput = " + newIndexInput);
    }
  
    if (activeQuestion === 8 && indexInput !== 0) {
      onSetActiveQuestion(prevActiveQuestion => prevActiveQuestion - 5);
      console.log("active question= " + (activeQuestion - 5));
    }
  
    if (activeQuestion === 9) {
      onSetVetorOutput1(calculateBinaryVector(numberInput));
    }
  
    if (activeQuestion === 10) {
      const newIndexInput1 = vetorOutput1.length;
      onSetIndexInput1(newIndexInput1);
      alert("O numero " + numberInput + " em binario é ");
      console.log("indexInput1 " + newIndexInput1);
      console.log(vetorOutput1);
    }
  
    if (activeQuestion === 11) {
        onSetVetorOutput((prevVetor) => [...prevVetor, vetorOutput1[indexInput]]);
        onSetIndexInput(prevIndexInput1 => prevIndexInput1 + 1);
    }
  
    if (activeQuestion === 12) {
      console.log("indexInput1 " + indexInput);
      console.log(vetorOutput);
      alert("O numero " + numberInput + " em binario é " + vetorOutput);
    }
  
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(prevActiveQuestion => prevActiveQuestion + 1);
    } else if (activeQuestion === numberOfQuestions - 1 && indexInput < indexInput1) {
      onSetActiveQuestion(prevActiveQuestion => prevActiveQuestion - 2);
    } else {
      // Ao chegar em onSetStep(22), faça vetorOutput igual a vetorOutput1
      onSetStep(24);
     // onSetVetorOutput([...vetorOutput1]);
    }
  };
  

  return (
    <div className="card">
      <div className="card-content">
        <div className={`content ${answered && checkAnswer() ? 'has-background-success' : ''}`}>
          <h2 className="mb-5">{data.question}</h2>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <div
                key={i}
                className={`radio-wrapper ${
                  (i === correctAnswerIndex) && selected ? 'has-background-success' :
                  (selected === choice ? (checkAnswer() ? 'has-background-success' : 'has-background-danger') : '')
                }`}
              >
                <label className={`radio`} >
                  <input
                    type="radio"
                    name="answer"
                    value={choice}
                    onChange={changeHandler}
                    checked={selected === choice}
                    disabled={answered || (selected !== '')}
                  />
                  {choice}
                </label>
                {answered && i === correctAnswerIndex && !checkAnswer() && (
                  <div className="has-text-danger">
                    Resposta correta: Não
                  </div>
                )}
              </div>
            ))}
          </div>
          {error && <div className="has-text-danger">{error}</div>}
          <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler} disabled={answered}>
            Próximo
          </button>
          <div className="mt-2">
            <strong>Sequência de Perguntas Respondidas:</strong> {sequenceString}
          </div>
          <div>
            {activeQuestion === 1 && <img src={img1} alt={`Imagem da pergunta ${activeQuestion + 1}`} />}
            {activeQuestion === 1 && <img src={img2} alt={`Imagem da pergunta ${activeQuestion + 1}`} />}
          </div>
          {selected && (
            <div>
              <img src={data.img} alt={`Imagem da pergunta ${activeQuestion + 1}`} />
              <img src={data.img1} alt={`Imagem da pergunta ${activeQuestion + 1}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question11;

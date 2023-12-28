import React, { useState, useEffect, useRef } from 'react';
import './Question.css'; // Substitua 'NomeDoArquivo' pelo nome real do seu arquivo CSS
import img1 from '../images/SegundaEtapa/Question9/Action2.jpg';
import img2 from '../images/SegundaEtapa/Question9/codigo2.jpg';


const Question9 = ({ data, 
    onAnswerUpdate, 
    numberOfQuestions, 
    activeQuestion, 
    onSetActiveQuestion, 
    onSetStep, 
    onConcatIndex, 
    numberInput, 
    onSetNumberInput, 
    vetorOutput, 
    onSetVetorOutput, 
    indexInput, 
    onSetIndexInput, 
    termo1,
    onSetTermo1,
    termo2,
    onSetTermo2,
    prox,
    onSetProx }) => {
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

  
  

  const nextClickHandler = () => {
    if (!selected) {
      return setError('Por favor, selecione uma opção!');
    }

    const isCorrect = checkAnswer();

    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected, correct: isCorrect }]);
    setAnswered(false);

    onConcatIndex((prevSequence) => prevSequence + (activeQuestion + 1) + ' ');

    if(activeQuestion === 0){
        numberInput  = prompt("Por favor, digite um valor de N:");
        onSetNumberInput(numberInput);
        console.log("numberinput=" + numberInput);  
    }
    console.log("numberinput=" + numberInput);

    if(parseInt(activeQuestion) === 6 && parseInt(numberInput) === 1){
      console.log(termo1)
      onSetVetorOutput((prevVetor) => [...prevVetor, termo1]);
      onSetStep(22);    
    }
    if(parseInt(activeQuestion) === 7 && parseInt(numberInput) === 2){
        onSetVetorOutput((prevVetor) => [...prevVetor, termo1]);
        onSetVetorOutput((prevVetor) => [...prevVetor, termo2]);
        onSetStep(22); 
    }

    if(parseInt(activeQuestion) === 7 && parseInt(numberInput) > 2){
        onSetVetorOutput((prevVetor) => [...prevVetor, termo1]);
        onSetVetorOutput((prevVetor) => [...prevVetor, termo2]);
    }

    if(activeQuestion === 8){
        alert(vetorOutput);
    }
    
    
    if(activeQuestion === 11){
        prox = termo1 + termo2;
        onSetProx(prox);
        onSetVetorOutput((prevVetor) => [...prevVetor, prox]);
    }

    if(activeQuestion === 12){
        alert(vetorOutput);
    }
    

    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    }
    else if (activeQuestion === numberOfQuestions - 1 && indexInput < numberInput-1)  {
      termo1 = termo2;
      termo2 = prox;
      onSetTermo1(termo1);
      onSetTermo2(termo2);
      onSetIndexInput(indexInput + 1);
      onSetActiveQuestion(activeQuestion - 5);
      console.log("indexinput = "+ indexInput); 
    }else{
      onSetStep(22);
    }
    
     
    console.log(activeQuestion);
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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {activeQuestion === 1 && <img src={img1} alt={`Imagem da pergunta ${activeQuestion + 1}`} />}
            {activeQuestion === 1 && <img src={img2} alt={`Imagem da pergunta ${activeQuestion + 1}`} />}
          </div>
          {selected && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src={data.img} alt={`Imagem da pergunta ${activeQuestion + 1}`} />
              <img src={data.img1} alt={`Imagem da pergunta ${activeQuestion + 1}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question9;

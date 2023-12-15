import React, { useState, useEffect, useRef } from 'react';


const Question3 = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep, onConcatIndex  }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const [answered, setAnswered] = useState(false);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
  const [sequenceString, setSequenceString] = useState('');
  const radiosWrapper = useRef();
  const [indexQuestion, setIndexQuestion] = useState('');

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
  
  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('Please select one option!');
    }
    const isCorrect = checkAnswer();
    setIndexQuestion(activeQuestion);
    console.log(indexQuestion);
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected, correct: isCorrect }]);
    setAnswered(false);
    onConcatIndex((prevSequence) => prevSequence + (activeQuestion + 1) + ' ');

    // if(activeQuestion===1 && selected ==="Nao"){
    //     onSetActiveQuestion(activeQuestion + 2);
    // }
    // else if(activeQuestion===3) {
    //     onSetActiveQuestion(activeQuestion - 2);
    // }
    // else if(activeQuestion < numberOfQuestions -1) {
    //     onSetActiveQuestion(activeQuestion + 1);
    // }else {
    //     onSetStep(5);
    //   }
    if(activeQuestion === 0){
        onSetActiveQuestion(activeQuestion + 1)
    }
    else if(activeQuestion === 1){
      selected==="Sim" ? onSetActiveQuestion(activeQuestion + 1):
      onSetActiveQuestion(activeQuestion + 2);
    }
    else if(activeQuestion===2){
      selected==="Sim" ? onSetActiveQuestion(activeQuestion + 2):
      onSetActiveQuestion(activeQuestion + 3);
    }else{
      onSetStep(7);
    }
    setSelected('');
    
  }

  return(
    
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
          {selected && (
            <div>
              <img src={data.img} alt={`Imagem da pergunta ${activeQuestion + 1}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Question3;
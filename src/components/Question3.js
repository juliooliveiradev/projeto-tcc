import React, { useState, useEffect, useRef } from 'react';


const Question3 = ({ data, onAnswerUpdate, numberOfQuestions,selectedChoice, setSelectedChoice, activeQuestion, onSetActiveQuestion, onSetStep, onConcatIndex }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();
  const [indexQuestion, setIndexQuestion] = useState('');



  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }
  
  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('Please select one option!');
    }
    setIndexQuestion(activeQuestion);
    console.log(indexQuestion);
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
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
        <div className="content">
          <h2 className="mb-5">{data.question}</h2>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <label className="radio has-background-light" key={i}>
                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                {choice}
              </label>
            ))}
          </div>
          {error && <div className="has-text-danger">{error}</div>}
          <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Question3;
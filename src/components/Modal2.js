import React from 'react';
import img1 from '../images/arte20.png'



const Modal2 = ({ onClose, results, data }) => {
  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Your answers</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body content">
        <h3>Quando estamos diante de uma situção, executamos uma sequencia de instruçoes para executar uma ação</h3>
        <h3>No caso, temos a situaçao de Abrir a Porta no qual esecutamos uma sequencia de ações com fim de abrir a porta</h3>
          <ul>
          { results.map((result, i) => (
              <li key={i} className="mb-6">
                <p><strong>{result.q}</strong></p>
                <p className={result.a === data[i].answer ? 'has-background-success has-text-white p-2' : 'has-background-danger has-text-white p-2'}>Your answer: {result.a}</p>
                {result.a !== data[i].answer && <p className="has-background-link has-text-white p-2">Correct answer: {data[i].answer}</p>}
              </li>
            )) }
            <h4>Na programação nao é diferente, o algoritmo é exatamente uma sequencia de comandos  e tomada de decisoes que tem por um fim, executar uma ação</h4>
            <h4>Para melhor ilustrar como é o algoritmo, fizemos um fluxograma com todas as instrucões</h4>
            <h4>Abrir uma Porta</h4>
           <img src={img1} alt='Imagem1'/>
          </ul>

        </section>
      </div>
    </div>
  );
}

export default Modal2;
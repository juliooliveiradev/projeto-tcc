import React from 'react';

const Start = ({ onQuizStart, onQuiz2Start, onQuiz3Start }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Aloritme-se</h1>
          <h2>Aqui voce aprende algoritmos com o que voce vive</h2>
          <h3>Escolha uma Etapa</h3>
          <h4>1º Etapa: Aprendendo algoritmos com nossas acoes do dia-a-dia</h4>
          <div class="box">
            <button className="button is-info is-medium" onClick={onQuizStart}>Beber um Refrigerante numa lata</button>
          </div>
          <div class="box">
            <button className="button is-info is-medium" onClick={onQuiz2Start}>Abrir a porta</button>
          </div>
          <div class="box">
            <button className="button is-info is-medium" onClick={onQuiz3Start}>Ligar a Lampada</button>
          </div>
          <h4>2º Etapa: Construindo algoritmos atraves de codigos de programaçao </h4>
          <div class="box">
            <button className="button is-info is-medium" onClick={onQuizStart}>Abrir Lampada</button>
          </div>
          <div class="box">
            <button className="button is-info is-medium" onClick={onQuizStart}>Abrir Lampada</button>
          </div>
          <div class="box">
            <button className="button is-info is-medium" onClick={onQuizStart}>Abrir Lampada</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
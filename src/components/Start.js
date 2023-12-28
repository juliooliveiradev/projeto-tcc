import React from 'react';

const Start = ({ onQuizStart, onQuiz2Start, onQuiz3Start, onQuiz4Start, onQuiz5Start, onQuiz6Start, onQuiz7Start, onQuiz8Start, onQuiz9Start, onQuiz10Start, onQuiz11Start, onQuiz12Start }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Aloritme-se</h1>
          <h2>Aqui voce aprende algoritmos com o que voce vive</h2>
          <h3>Escolha uma Etapa</h3>
          <div class="box">
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
          </div>  
          <div class="box">
            <h4>2º Etapa: Construindo algoritmos atraves de codigos de programaçao </h4>
            <div class="box">
              <h4>1º Subetapa: Algoritimos Basicos </h4>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz4Start}>Troca de Valores de Duas Variaveis</button>
              </div>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz5Start}>Contagem de Notas</button>
              </div>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz6Start}>Soma de um conjunto de numeros</button>
              </div>
            </div>
            <div class="box">
              <h4>2º Subetapa: Algoritimos Interativos </h4>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz7Start}>Calculo do Fatorial</button>
              </div>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz8Start}>Soma de uma serie infinita</button>
              </div>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz9Start}>Sequencia Fibbonacci</button>
              </div>
            </div>
            <div class="box">
              <h4>3º Subetapa: Algoritimos de Representação e Manipulção da Informação </h4>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz10Start}>Inversão dos digitos de um Numero Inteiro</button>
              </div>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz11Start}>Conversão da base decimal para a base binaria</button>
              </div>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz12Start}>Conversão de Caractere para Numero</button>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Start;
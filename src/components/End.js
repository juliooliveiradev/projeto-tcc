import React from "react";
import { formatTime } from '../utils';
import img1 from '../images/PrimeiraEtapa/Question/arte10.png';

const End = ({ onReset,  time, sequence }) => {
  

 

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p><strong>Tempo de Conclusão:</strong> {formatTime(time)}</p>
          <h3>Quando estamos diante de uma situação, executamos uma sequência de instruções para executar uma ação</h3>
          <p><strong>Sequencia de Questoes Respondidas:</strong> {sequence}</p>
          <h3>No caso, temos a situação de Beber um Refrigerante na qual executamos uma sequência de ações com fim de beber um refrigerante</h3>
          <p><strong>1.</strong> Você pega a Lata</p>
          <p><strong>2.</strong> Depois você segura o Lacre</p>
          <p><strong>3.</strong> Aí você Abre a Lata com o Lacre</p>
          <p><strong>4.</strong> Remova o Lacre</p>
          <p><strong>5.</strong> Posiciona a Lata na Boca</p>
          <p><strong>6.</strong> Inclina a Lata</p>
          <p><strong>7.</strong> Bebe o Refrigerante</p>
          <p><strong>8.</strong> Cola a Lata de volta ao Local Original</p>
          <ul>
            <h4>Na programação, o algoritmo é exatamente uma sequência de comandos que tem por um fim executar uma ação</h4>
            <h4>Para melhor ilustrar como é o algoritmo, fizemos um fluxograma com todas as instruções</h4>
            <h4>Beber Refrigerante</h4>
            <img src={img1} alt='Imagem1'/>
          </ul>
          <button className="button is-success" onClick={onReset}>
            Voltar para o Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
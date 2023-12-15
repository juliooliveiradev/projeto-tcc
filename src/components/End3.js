import React from 'react';
import { formatTime } from '../utils';
import img1 from '../images/PrimeiraEtapa/Question3/arte30.png';
import img2 from '../images/PrimeiraEtapa/Question3/Sequencia1.png';
import img3 from '../images/PrimeiraEtapa/Question3/Sequencia2.png';
import img4 from '../images/PrimeiraEtapa/Question3/Sequencia3.png';

const End3 = ({ onReset, time, sequence }) => {

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Parabens, Você Concluiu a Ação.</h3>
          <p><strong>Your time:</strong> {formatTime(time)}</p>
          <p><strong>Sequence of questions answered:</strong> {sequence}</p>
          <h3>Quando estamos diante de uma situação, executamos uma sequência de instruções para executar uma ação</h3>
          <p><strong>Sequence of questions answered:</strong> {sequence}</p>
          <h3>No caso, temos a situação de uma lampada que não funciona na qual executamos uma sequência de ações com fim de fazer funcionar a lampada</h3>
          <p><strong>1.</strong> Você verifica se a Lampada esta plugada</p>
          <p><strong>2.</strong> Se não tiver, voce pluga alampada e ela irá funcionar</p>
          <p><strong>3.</strong> Se ela já estiver plugada, você verifica se o bulbo queimou</p>
          <p><strong>4.</strong> Se o bulbo tiver queimado, você troca o bulbo</p>
          <p><strong>5.</strong> Se o bulbo não tiver queimado, aí voce compra uma nova lampada</p>
          <ul>
            <h4>Na programação, o algoritmo é exatamente uma sequência de comandos e tomada de decisões que tem por fim executar uma ação</h4>
            <h4>Para melhor ilustrar como é o algoritmo, fizemos um fluxograma com todas as instruções</h4>
            <h4>Abrir uma Porta</h4>
            <img src={img1} alt="Imagem1" />
            <h4>Tambem fizemos o fluxograma da sequencia de Açoes que você executou durante o quiz referente a sequencia {sequence}</h4>
            <img src={sequence === "1 2 4 " ? img2 : sequence === "1 2 3 5 " ? img3 : img4} alt="Imagem1" />
          </ul>
        </div>
        <button className="button is-success" onClick={onReset}>
            Voltar ao Inicio
          </button>
      </div>
    </div>
  );
};

export default End3;

import React from 'react';
import { formatTime } from '../utils';
import img1 from '../images/SegundaEtapa/Question7/codigo 4.jpg';
import img2 from '../images/SegundaEtapa/Question7/Codigo4VA.png';

const End7 = ({ onReset,  time, sequence, numberInput}) => {
  
  const n = parseInt(numberInput, 10);
  const fatorial = Array.from({ length: n }, (_, index) => index + 1).reduce((acc, num) => acc * num, 1);

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p><strong>Tempo de Conclusão:</strong> {formatTime(time)}</p>
          <h3>Parabens, Você acaba de construir um algoritmo atraves de uma sequencia de linha de codigos executada!</h3>
          <p><strong>Sequencia de linhas de codigos:</strong> {sequence}</p>
          <h3>Veja Passo-a-passo como se calcula um fatorial de um numero</h3>
          <p><strong>1-</strong> Nomeie as variaveis que serao utilizados que no caso seria N, Contador e produto</p>
          <p><strong>2-</strong> Obter o número n, onde n ≥ 0.</p>
          <p><strong>3-</strong> Inicializar o produto com 1 (um) e a contagem de produtos com 0 (zero).</p>
          <p><strong>4-</strong> Enquanto menos do que n produtos tiverem sido calculados, fazer repetidamente:</p>
          <p><strong>4.1-</strong> incrementar a contagem de produtos;</p>
          <p><strong>4.2-</strong>  calcular a soma atual, adicionando o número obtido à soma mais recente.calcular o produto atual, multiplicando a variável de contagem pelo produto mais recente.</p>
          <p><strong>5-</strong> Exibir o resultado (n!).</p>
          <ul>
            <h4>No Final teremos esse Resultado:</h4>
            <p><strong>Número inserido:</strong> {numberInput}</p>
            <p><strong>Fatorial:</strong> {fatorial}</p>
            <h4>Na programação, o algoritmo é exatamente uma sequência de comandos que tem por um fim executar uma ação</h4>
            <h4>Para melhor ilustrar como é o algoritmo, fizemos um fluxograma com todas as instruções</h4>
            <h4>Calculo do Fatorial</h4>
            <img src={img1} alt='Imagem1'/>
            <h4>Enquanto voce estava respondendo as perguntas do quiz você estava montando um codigo de programação.</h4>
            <h4>Veja abaixo como foi montado o codigo</h4>
            <img src={img2} alt='Imagem1'/>
          </ul>
          
          <button className="button is-success" onClick={onReset}>
            Voltar para o Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default End7;
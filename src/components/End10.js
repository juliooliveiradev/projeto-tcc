import React from 'react';
import { formatTime } from '../utils';
import img1 from '../images/SegundaEtapa/Question10/codigo 7.jpg';
import img2 from '../images/SegundaEtapa/Question10/CodigoVA7.png';

const End10 = ({ onReset, time, sequence, numberInput }) => {
    const invertNumber = (n) => {
        const invertedNumber = String(n)
          .split('')
          .reduceRight((acc, digit) => acc + digit, '');
      
        return parseInt(invertedNumber, 10);
      };
      
      const invertedNumber = invertNumber(numberInput);

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p><strong>Tempo de Conclusão:</strong> {formatTime(time)}</p>
          <h3>Parabens, Você acaba de construir um algoritmo atraves de uma sequencia de linha de codigos executada!</h3>
          <p><strong>Sequência de linhas de código:</strong> {sequence}</p>
          <h3>Veja como inverter um número inteiro positivo:</h3>
          <p><strong>1-</strong> Nomeie as variaveis que serao utilizados que no caso seria N, invertido e resto</p>
          <p><strong>2-</strong> Obter o número inteiro positivo a ser invertido.</p>
          <p><strong>3-</strong> Definir a condição inicial para o número invertido.</p>
          <p><strong>4-</strong> Enquanto o número que está sendo invertido for maior do que zero, faça:</p>
          <p><strong>4.1-</strong> extrair o dígito mais à direita desse número, usando o resto da divisão dele por 10;</p>
          <p><strong>4.2-</strong> atualizar o número invertido, multiplicando o seu valor anterior por 10 e adicionando a ele o dígito mais à direita extraído recentemente;</p>
          <p><strong>4.3-</strong> remover o dígito mais à direita do número que está sendo invertido, usando a divisão inteira por 10;</p>
          <p><strong>4-</strong> Exibir o número invertido.</p>
          <h4>No final, teremos o número invertido.</h4>
          <p><strong>Número inserido:</strong> {numberInput}</p>
          <p><strong>Número invertido:</strong> {invertedNumber}</p>
          <ul>
            
            <h4>Na programação, o algoritmo é exatamente uma sequência de comandos que tem por um fim executar uma ação</h4>
            <h4>Para melhor ilustrar como é o algoritmo, fizemos um fluxograma com todas as instruções</h4>
            <img src={img1} alt='Imagem1' />
            <h4>Enquanto você estava respondendo as perguntas do quiz, você estava montando um código de programação.</h4>
            <h4>Veja abaixo como foi montado o código:</h4>
            <img src={img2} alt='Imagem2' />
          </ul>
          <button className="button is-success" onClick={onReset}>
            Voltar para o Início
          </button>
        </div>
      </div>
    </div>
  );
};

export default End10;

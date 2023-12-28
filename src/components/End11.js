import React from 'react';
import { formatTime } from '../utils';
import img1 from '../images/SegundaEtapa/Question11/codigo 8.jpg';
import img2 from '../images/SegundaEtapa/Question11/CodigoVA8.png';

const End11 = ({ results,
    onReset,
    time,
    sequence,
    numberInput,
    vetorOutput }) => {
    

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p><strong>Tempo de Conclusão:</strong> {formatTime(time)}</p>
          <h3>Parabens, Você acaba de construir um algoritmo atraves de uma sequencia de linha de codigos executada!</h3>
          <p><strong>Sequência de linhas de código:</strong> {sequence}</p>
          <h3>Veja como converter um numero da base Decimal para base binaria</h3>
          <p><strong>1-</strong> Nomeie as variaveis que serao utilizados que no caso seria n, q, ndigit, r, i como Inteiro e binario como vetor de 50 numeros Inteiros</p>
          <p><strong>2-</strong> Obter o número decimal a ser convertido e inicializar o quociente com este número.</p>
          <p><strong>3-</strong>  Inicializar a contagem de novos dígitos com zero.</p>
          <p><strong>4-</strong> Fazer repetidamente até que o quociente seja zero:</p>
          <p><strong>4.1-</strong> calcular o próximo dígito mais significativo, usando o resto da divisão do quociente atual pela nova base (2);</p>
          <p><strong>4.2-</strong> armazenar esse dígito no array de saída;</p>
          <p><strong>4.3-</strong> incrementar a contagem de novos dígitos;</p>
          <p><strong>4.4-</strong> calcular o próximo quociente a partir do seu antecessor, usando a divisão inteira pela nova base (2).</p>
          <p><strong>5-</strong> Exibir a representação binária do número a partir do array de saída, usando a ordem inversa dos elementos.</p>
          <h4>No final, teremos o número na base 2</h4>
          <p><strong>Número inserido:</strong> {numberInput}</p>
          <p><strong>Número na base 2:</strong> {vetorOutput}</p>
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

export default End11;

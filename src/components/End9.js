import React from 'react';
import { formatTime } from '../utils';
import img1 from '../images/SegundaEtapa/Question9/codigo 6.jpg';
import img2 from '../images/SegundaEtapa/Question9/CodigoVA6.png';
import img3 from '../images/SegundaEtapa/Question9/Action8.jpg';
import img4 from '../images/SegundaEtapa/Question9/Action9.jpg';
import img5 from '../images/SegundaEtapa/Question9/codigo8.png';
import img6 from '../images/SegundaEtapa/Question9/codigo9.png';

const End6 = ({ onReset,  time, sequence, numberInput, vetorOutput }) => {
  
    const sequencia = vetorOutput.map(Number);
    console.log(vetorOutput);
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p><strong>Tempo de Conclusão:</strong> {formatTime(time)}</p>
          <h3>Parabens, Você acaba de construir um algoritmo atraves de uma sequencia de linha de codigos executada!</h3>
          <p><strong>Sequencia de linhas de codigos:</strong> {sequence}</p>
          <h3>Veja Passo-a-passo como se elabora uma sequencia Fibbonacci</h3>
          <p><strong>1-</strong> Nomeie as variaveis que serao utilizados que no caso seria N, i, termo1, termo2 e proximo</p>
          <p><strong>2-</strong> Obter o número de termos a serem gerados (n).</p>
          <p><strong>3-</strong> Atribuir valores aos dois primeiros números de Fibonacci, a e b.</p>
          <p><strong>4-</strong> Se n for igual a 1, então exibir o primeiro número de Fibonacci, senão exibir os dois primeiros números.</p>
          {numberInput > 2 &&(<p><strong>5-</strong> Enquanto menos do que n números de Fibonacci tiverem sido gerados, fazer repetidamente:</p>)}
          {numberInput > 2 &&(<p><strong>5.1-</strong> atualizar a contagem de números gerados;</p>)}
          {numberInput > 2 &&(<p><strong>5.2-</strong> gerar o próximo número de Fibonacci, proximo;</p>)}
          {numberInput > 2 &&(<p><strong>5.3-</strong> escrever o próximo número de Fibonacci;</p>)}
          {numberInput > 2 &&(<p><strong>5.4-</strong> atribuir ao primeiro número de Fibonacci o valor do segundo número;</p>)}
          {numberInput > 2 &&(<p><strong>5.5-</strong> atribuir ao segundo número de Fibonacci o valor do próximo número gerado.</p>)}
          <ul>
            <h4>No Final teremos esse Resultado:</h4>
            <p><strong>Numero Inserido:</strong> {numberInput}</p>
            <p><strong>Sequencia:</strong> {sequencia.join(',')}</p>
            <h4>Na programação, o algoritmo é exatamente uma sequência de comandos que tem por um fim executar uma ação</h4>
            <h4>Para melhor ilustrar como é o algoritmo, fizemos um fluxograma com todas as instruções</h4>
            <h4>Soma de um Conjunto de Numeros</h4>
            <img src={parseInt(numberInput) === 1 ? img3 : parseInt(numberInput) === 2 ? img4 : img1} alt='Imagem1'/>
            <h4>Enquanto voce estava respondendo as perguntas do quiz você estava montando um codigo de programação.</h4>
            <h4>Veja abaixo como foi montado o codigo</h4>
            <img src={parseInt(numberInput) === 1 ? img5 : parseInt(numberInput) === 2 ? img6 : img2} alt='Imagem1'/>
          </ul>
          
          <button className="button is-success" onClick={onReset}>
            Voltar para o Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default End6;
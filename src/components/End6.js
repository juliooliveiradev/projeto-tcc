import React from 'react';
import { formatTime } from '../utils';
import img1 from '../images/SegundaEtapa/Question6/codigo 3.jpg';
import img2 from '../images/SegundaEtapa/Question6/CodigoVA3.jpg';

const End6 = ({ onReset,  time, sequence,userInput,userInput1, numberInput, vetorOutput }) => {
  
    const numeros = vetorOutput.map(Number);
    const soma = numeros.reduce((acc, numero) => acc + numero, 0)
    console.log(vetorOutput);
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p><strong>Tempo de Conclusão:</strong> {formatTime(time)}</p>
          <h3>Parabens, Você acaba de construir um algoritmo atraves de uma sequencia de linha de codigos executada!</h3>
          <p><strong>Sequencia de linhas de codigos:</strong> {sequence}</p>
          <h3>Veja Passo-a-passo como se soma os valores de um conjunto</h3>
          <p><strong>1-</strong> Nomeie as variaveis que serao utilizados que no caso seria N,Contador, numero e soma</p>
          <p><strong>2-</strong> Inicializar a soma com 0 (zero).</p>
          <p><strong>3-</strong> Enquanto menos do que n números tiverem sido somados, fazer repetidamente:</p>
          <p><strong>3.1-</strong> Obter o próximo número;</p>
          <p><strong>3.2-</strong>  calcular a soma atual, adicionando o número obtido à soma mais recente.</p>
          <p><strong>4-</strong> Exibir a soma dos n números</p>
          <ul>
            <h4>No Final teremos esse Resultado:</h4>
            <p><strong>Numeros inseridos:</strong> {numeros.join(',')}</p>
            <p><strong>Soma de todos os numeros:</strong> {soma}</p>
            <h4>Na programação, o algoritmo é exatamente uma sequência de comandos que tem por um fim executar uma ação</h4>
            <h4>Para melhor ilustrar como é o algoritmo, fizemos um fluxograma com todas as instruções</h4>
            <h4>Soma de um Conjunto de Numeros</h4>
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

export default End6;
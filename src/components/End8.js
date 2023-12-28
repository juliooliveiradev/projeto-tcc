import React from 'react';
import { formatTime } from '../utils';
import img1 from '../images/SegundaEtapa/Question8/codigo 5.jpg';
import img2 from '../images/SegundaEtapa/Question8/CodigoVA5.png';

const End7 = ({ onReset,  time, sequence, numberInput, numberInput1}) => {
  
    const fatorial = (n) => Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1);

    const termo = (i, sinal) => sinal * Math.pow(numberInput, i) / fatorial(i);
  
    let i = -1;
    let sinal = -1;
  
    const s = Array.from({ length: numberInput1 }, (_, j) => {
      i = i + 2;
      sinal = -sinal;
      return termo(i, sinal);
    }).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p><strong>Tempo de Conclusão:</strong> {formatTime(time)}</p>
          <h3>Parabens, Você acaba de construir um algoritmo atraves de uma sequencia de linha de codigos executada!</h3>
          <p><strong>Sequencia de linhas de codigos:</strong> {sequence}</p>
          <h3>Veja Passo-a-passo como se calcula uma Soma de uma seuquencia infinita ou Calculo da Função Seno</h3>
          <p><strong>1-</strong> Nomeie as variaveis que serao utilizados que no caso seria totalTermos, i, ContaTermos como inteiro e x, soma e termo como real</p>
          <p><strong>2-</strong> Obter o número de termos (n) e o valor de x.</p>
          <p><strong>3-</strong> Definir as condições iniciais para o primeiro termo, que não pode ser calculado iterativamente.</p>
          <p><strong>4-</strong> Enquanto menos do que n termos tiverem sido calculados, fazer repetidamente:</p>
          <p><strong>4.1-</strong> identificar o termo atual;</p>
          <p><strong>4.2-</strong>  gerar termo atual a partir do seu antecessor;</p>
          <p><strong>4.3-</strong>   adicionar o termo atual, com o sinal apropriado, à soma acumulada.</p>
          <p><strong>5-</strong>  Exibir o valor da soma.</p>
          <ul>
            <h4>No Final teremos esse Resultado:</h4>
            <p><strong>Número do x:</strong> {numberInput}</p>
            <p><strong>Número da quantidade de termos:</strong> {numberInput1}</p>
            <p><strong>Resultado da soma:</strong> {s}</p>
            <h4>Na programação, o algoritmo é exatamente uma sequência de comandos que tem por um fim executar uma ação</h4>
            <h4>Para melhor ilustrar como é o algoritmo, fizemos um fluxograma com todas as instruções</h4>
            <h4>Soma de uma Sequencia Infinita (Caluculo da Função Seno)</h4>
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
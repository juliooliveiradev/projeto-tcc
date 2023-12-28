import React from 'react';
import { formatTime } from '../utils';
import img1 from '../images/SegundaEtapa/Question5/codigo 2.jpg';
import img2 from '../images/SegundaEtapa/Question5/CodigoVA2.png';

const End5 = ({ onReset,  time, sequence,userInput,userInput1, numberInput, vetorOutput }) => {
  
  const contagem = vetorOutput.reduce((count, nota) => (nota >= 50 ? count + 1 : count), 0);
  const vetorMaioresIguais50 = vetorOutput.filter(nota => nota >= 50);


  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p><strong>Tempo de Conclusão:</strong> {formatTime(time)}</p>
          <h3>Parabens, Você acaba de construir um algoritmo atraves de uma sequencia de linha de codigos executada</h3>
          <p><strong>Sequencia de linhas de codigos:</strong> {sequence}</p>
          <h3>Veja Passo-a-passo como se troca os valores de duas variaveis</h3>
          <p><strong>1-</strong> Nomeie as variaveis que serao utulizados com N,Contador, e Nota</p>
          <p><strong>2-</strong> Obter o número de notas a serem processadas.</p>
          <p><strong>3-</strong> Inicializar a contagem com zero.</p>
          <p><strong>4-</strong> Enquanto houver notas a serem processadas,fazer repetidamente:</p>
          <p><strong>4.1-</strong> Obter a próxima nota;</p>
          <p><strong>4.2-</strong> Se a nota for suficiente para passar no exame (≥ 50) então adicionar 1 (um) à contagem.</p>
          <p><strong>5-</strong> Exibir a contagem (número total de aprovações)</p>
          <ul>
            <h4>No Final teremos esse Resultado:</h4>
            <p><strong>Notas inseridas:</strong> {vetorOutput.join(',')}</p>
            <p><strong>Notas maiores ou iguais a 50:</strong> {vetorMaioresIguais50.join(',')}</p>
            <p><strong>Número de aprovações:</strong> {contagem}</p>
            <h4>Na programação, o algoritmo é exatamente uma sequência de comandos que tem por um fim executar uma ação</h4>
            <h4>Para melhor ilustrar como é o algoritmo, fizemos um fluxograma com todas as instruções</h4>
            <h4>Contagem de Notas</h4>
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

export default End5;
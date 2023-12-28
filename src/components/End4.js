import React, { useEffect,useRef } from 'react';
import { formatTime } from '../utils';
import img1 from '../images/SegundaEtapa/Question4/codigo 1.jpg';
import img2 from '../images/SegundaEtapa/Question4/CodigoVA1.png';

const End4 = ({ onReset,  time, sequence,userInput,userInput1 }) => {
  
  const userInputRef = useRef(userInput);
  const userInput1Ref = useRef(userInput1);

  // Atualiza as referências ao mudar as propriedades
  useEffect(() => {
    userInputRef.current = userInput;
    userInput1Ref.current = userInput1;
  }, [userInput, userInput1]);

  // Utiliza o useEffect para executar código após a montagem do componente
  useEffect(() => {
    // Função para trocar os valores
    const trocarValores = () => {
      console.log('Valor original de "a":', userInputRef.current);
      console.log('Valor original de "b":', userInput1Ref.current);

      // Trocar os valores usando as referências
      let temp = userInputRef.current;
      userInputRef.current = userInput1Ref.current;
      userInput1Ref.current = temp;

      console.log('Novo valor de "a":', userInputRef.current);
      console.log('Novo valor de "b":', userInput1Ref.current);
    };

    // Chamando a função ao montar o componente
    trocarValores();
  }, []); // Removido o array de dependências para evitar o aviso


  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p><strong>Tempo de Conclusão:</strong> {formatTime(time)}</p>
          <h3>Parabens, Você acaba de construir um algoritmo atraves de uma sequencia de linha de codigos executada</h3>
          <p><strong>Sequencia de linhas de codigos:</strong> {sequence}</p>
          <h3>Veja Passo-a-passo como se troca os valores de duas variaveis</h3>
          <p><strong>1.</strong> Nomeie as variaveis que serao utulizados com A,B, e Aux</p>
          <p><strong>2.</strong> Defina as variaveis A e B</p>
          <p><strong>3.</strong> Guardar o valor original da variável a em uma variável auxiliar no caso utilizamos o valor de A.</p>
          <p><strong>4.</strong> Atribuir à variável A o valor original da variável B.</p>
          <p><strong>5.</strong> Atribuir à variável B o valor original da variável A, que está armazenado na variável auxiliar.</p>
          <ul>
            <h4>No Final teremos esse Resultado:</h4>
            <p>
            <strong>Novo valor de "a":</strong> {userInputRef.current}
          </p>
          <p>
            <strong>Novo valor de "b":</strong> {userInput1Ref.current}
          </p>
            <h4>Na programação, o algoritmo é exatamente uma sequência de comandos que tem por um fim executar uma ação</h4>
            <h4>Para melhor ilustrar como é o algoritmo, fizemos um fluxograma com todas as instruções</h4>
            <h4>Trocar o valores de duas Variaveis</h4>
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

export default End4;
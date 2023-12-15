import { formatTime } from '../utils';
import img1 from '../images/PrimeiraEtapa/Question2/arte20.png';
import img2 from '../images/PrimeiraEtapa/Question2/OutraSequencia.png';

const End2 = ({onReset, time, sequence }) => {

 
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Parabens, Você Concluiu a Ação.</h3>
          <p><strong>Your time:</strong> {formatTime(time)}</p>
          <h3>Quando estamos diante de uma situação, executamos uma sequência de instruções para executar uma ação</h3>
          <p><strong>Sequencia de Instruçoes Executada:</strong> {sequence}</p>
          <h3>No caso, temos a situação de Abrir a Porta na qual executamos uma sequência de ações com fim de abrir a porta</h3>
          <p><strong>1.</strong> Vá ate a porta</p>
          <p><strong>2.</strong> Gira a Maçaneta</p>
          <p><strong>3.</strong> Verifique se a porta está trancada</p>
          <p><strong>4.</strong> Se sim, gire a Chave e a maçaneta</p>
          <p><strong>5.</strong> Se nao, abra a porta</p>
          <p><strong>6.</strong> Entre no Quarto</p>
          <p><strong>7.</strong> Fecha a Porta</p>
          <ul>
            <h4>Na programação, o algoritmo é exatamente uma sequência de comandos e tomada de decisões que tem por fim executar uma ação</h4>
            <h4>Para melhor ilustrar como é o algoritmo, fizemos um fluxograma com todas as instruções</h4>
            <h4>Abrir uma Porta</h4>
            <img src={img1} alt="Imagem1" />
            <h4>Tambem fizemos o fluxograma da sequencia de Açoes que você executou durante o quiz referente a sequencia {sequence}</h4>
            <img src={sequence === "1 2 3 5 6 7 " ? img2 : img1} alt="Imagem1" />
          </ul>
        </div>
        <button className="button is-success" onClick={onReset}>
            Voltar Para o Inicio
          </button>
      </div>
    </div>
  );
};

export default End2;

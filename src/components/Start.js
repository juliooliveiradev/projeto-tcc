import React, { useState, useEffect } from 'react';


const Start = ({ onQuizStart, onQuiz2Start, onQuiz3Start, onQuiz4Start, onQuiz5Start, onQuiz6Start, onQuiz7Start, onQuiz8Start, onQuiz9Start, onQuiz10Start, onQuiz11Start, onQuiz12Start, on3thStepStart,on4thStepStart, on5thStepStart }) => {

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    window.open('https://forms.gle/eU116UgUwYyRzFRWA', '_blank');
  };

  useEffect(() => {
    // Pode ser usado para mostrar o modal ao carregar
    setIsModalOpen(true);
  }, []);

  return(
    <div className="card">

      {isModalOpen && (
        <div className="modal is-active">
          <div className="modal-background" onClick={handleCloseModal}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Bem-vindo ao Estudo de Caso!</p>
              <button className="delete" onClick={handleCloseModal}></button>
            </header>
            <section className="modal-card-body">
              <p>Bem-vindo ao estudo de caso.</p>
              <p>Ao fechar essa Janela, sera aberto um formulario para ser preenchido</p>
              <p>Após o Preenchimento de Dados Pessoais, sera direcionado para uma seção que dara instruçoes para usar cada etapa junto com as perguntas sobre essa etapa.</p>
              <p>Desde já muito obrigado e espero que essa ferramente lhe ajude nos estudos de programação</p>
              <button className="button is-primary" onClick={handleCloseModal}>Ir para o Formulário</button>
            </section>
          </div>
        </div>
      )}

      <div className="card-content">
        <div className="content">
          <h1>Algoritme-se</h1>
          <h2>Aqui voce aprende algoritmos com o que voce vive</h2>
          <h3>Escolha uma Etapa</h3>
          <div class="box">
            <h4>1º Etapa: Aprendendo algoritmos com nossas acoes do dia-a-dia</h4>
            <div class="box">
              <button className="button is-info is-medium" onClick={onQuizStart}>Beber um Refrigerante numa lata</button>
            </div>
            <div class="box">
              <button className="button is-info is-medium" onClick={onQuiz2Start}>Abrir a porta</button>
            </div>
            <div class="box">
              <button className="button is-info is-medium" onClick={onQuiz3Start}>Ligar a Lampada</button>
            </div>
          </div>  
          <div class="box">
            <h4>2º Etapa: Construindo algoritmos atraves de codigos de programaçao </h4>
            <div class="box">
              <h4>1º Subetapa: Algoritimos Basicos </h4>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz4Start}>Troca de Valores de Duas Variaveis</button>
              </div>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz5Start}>Contagem de Notas</button>
              </div>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz6Start}>Soma de um conjunto de numeros</button>
              </div>
            </div>
            <div class="box">
              <h4>2º Subetapa: Algoritimos Interativos </h4>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz7Start}>Calculo do Fatorial</button>
              </div>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz8Start}>Soma de uma serie infinita</button>
              </div>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz9Start}>Sequencia Fibbonacci</button>
              </div>
            </div>
            <div class="box">
              <h4>3º Subetapa: Algoritimos de Representação e Manipulção da Informação </h4>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz10Start}>Inversão dos digitos de um Numero Inteiro</button>
              </div>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz11Start}>Conversão da base decimal para a base binaria</button>
              </div>
              <div class="box">
                <button className="button is-info is-medium" onClick={onQuiz12Start}>Conversão de Caractere para Numero</button>
              </div>
            </div>
          </div>
          <div class = "box">
            <h3>Etapas exclusivas para estudo de caso </h3>
          </div>
          <div class = "box">
            <h4>3º Etapa: Utilização de plataformas semelhantes </h4>
            <div class="box">
              <button className="button is-info is-medium" onClick={on3thStepStart}>Plataformas Semelhantes</button>
            </div>
          </div>
          <div class = "box">
            <h4>4º Etapa: Utilização de IA para a comprensão de como o algoritmo é construido </h4>
            <div class="box">
              <button className="button is-info is-medium" onClick={on4thStepStart}>Open AI</button>
            </div>
          </div>
          <div class = "box">
            <h4>5º Etapa: Utilização de jogos de programação </h4>
            <div class="box">
              <button className="button is-info is-medium" onClick={on5thStepStart}>Jogos para Programadores</button>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Start;
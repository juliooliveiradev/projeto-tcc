import React from 'react';
import imgScratch from '../images/Quinta Etapa/scratch.png'; // Substitua pelo caminho correto da imagem do Scratch
import imgTynker from '../images/Quinta Etapa/tynker.png'; // Substitua pelo caminho correto da imagem do Tynker
import imgMinecraft from '../images/Quinta Etapa/minecraft-education.png'; // Substitua pelo caminho correto da imagem do Minecraft Education
import imgScreeps from '../images/Quinta Etapa/screeps.png'; // Substitua pelo caminho correto da imagem do Screeps
import imgCodeCombat from '../images/Quinta Etapa/code-combat.png'; // Substitua pelo caminho correto da imagem do Code Combat
import imgRoboMind from '../images/Quinta Etapa/robomind.png'; // Substitua pelo caminho correto da imagem do RoboMind
import imgCheckio from '../images/Quinta Etapa/checkio.png'; // Substitua pelo caminho correto da imagem do Check.io
import imgCodeMonkey from '../images/Quinta Etapa/codemonkey.png'; // Substitua pelo caminho correto da imagem do CodeMonkey
import imgVimAdventures from '../images/Quinta Etapa/vim-adventures.png'; // Substitua pelo caminho correto da imagem do Vim Adventures
import imgElevatorSaga from '../images/Quinta Etapa/elevator-saga.png'; // Substitua pelo caminho correto da imagem do Elevator Saga
import imgFlexboxFroggy from '../images/Quinta Etapa/flexbox-froggy.png'; // Substitua pelo caminho correto da imagem do Flexbox Froggy
import imgCyberDojo from '../images/Quinta Etapa/cyber-dojo.png'; // Substitua pelo caminho correto da imagem do Cyber-Dojo
import imgCodinGame from '../images/Quinta Etapa/codingame.png'; // Substitua pelo caminho correto da imagem do CodinGame
import imgUntrusted from '../images/Quinta Etapa/untrusted.png'; // Substitua pelo caminho correto da imagem do Untrusted
import imgHRM from '../images/Quinta Etapa/human-resource-machine.png'; // Substitua pelo caminho correto da imagem do Human Resource Machine

const jogos = [
  {
    nome: 'Scratch',
    imagem: imgScratch,
    instrucoes: 'Scratch é uma plataforma visual que permite criar jogos e animações usando blocos de programação. Ideal para iniciantes.',
    comoJogar: 'Você pode jogar diretamente no navegador criando um novo projeto e arrastando blocos de código.',
    precisaInstalar: 'Não, pode ser usado diretamente pelo navegador.',
    downloads: 'Não é necessário realizar downloads.',
    link: 'https://scratch.mit.edu/'
  },
  {
    nome: 'Tynker',
    imagem: imgTynker,
    instrucoes: 'Tynker é uma plataforma interativa para aprender programação através de jogos e desafios.',
    comoJogar: 'Crie uma conta, escolha um curso ou atividade e siga as instruções na tela para completar os desafios.',
    precisaInstalar: 'Sim, há uma versão móvel disponível para download, mas também pode ser usado no navegador.',
    downloads: 'Disponível para iOS e Android.',
    link: 'https://www.tynker.com/'
  },
  {
    nome: 'Minecraft Education',
    imagem: imgMinecraft,
    instrucoes: 'Minecraft Education é uma versão do jogo que ensina conceitos de programação e matemática.',
    comoJogar: 'Use a versão educacional para acessar lições e projetos em grupo.',
    precisaInstalar: 'Sim, precisa ser instalado no dispositivo.',
    downloads: 'Disponível para Windows, Mac, iOS e Android.',
    link: 'https://education.minecraft.net/'
  },
  {
    nome: 'Screeps',
    imagem: imgScreeps,
    instrucoes: 'Screeps é um jogo de programação multiplayer onde você controla criaturas com JavaScript.',
    comoJogar: 'Programar seu Screep para coletar recursos e lutar contra outros jogadores.',
    precisaInstalar: 'Sim, precisa ser instalado, mas também pode ser jogado no navegador.',
    downloads: 'Disponível no Steam e na página oficial.',
    link: 'https://screeps.com/'
  },
  {
    nome: 'Code Combat',
    imagem: imgCodeCombat,
    instrucoes: 'Code Combat é um jogo onde você aprende programação jogando.',
    comoJogar: 'Complete os níveis escrevendo código para controlar seu personagem.',
    precisaInstalar: 'Não, pode ser jogado no navegador.',
    downloads: 'Não é necessário realizar downloads.',
    link: 'https://codecombat.com/'
  },
  {
    nome: 'RoboMind',
    imagem: imgRoboMind,
    instrucoes: 'RoboMind ensina programação através do controle de um robô em um ambiente virtual.',
    comoJogar: 'Escreva código para programar o robô e completar tarefas.',
    precisaInstalar: 'Sim, precisa ser instalado no computador.',
    downloads: 'Download disponível no site oficial.',
    link: 'https://robomind.net/'
  },
  {
    nome: 'Check.io',
    imagem: imgCheckio,
    instrucoes: 'Check.io é um jogo que desafia você a resolver problemas de programação.',
    comoJogar: 'Escreva código em Python para completar os desafios.',
    precisaInstalar: 'Não, pode ser jogado diretamente no navegador.',
    downloads: 'Não é necessário realizar downloads.',
    link: 'https://checkio.org/'
  },
  {
    nome: 'CodeMonkey',
    imagem: imgCodeMonkey,
    instrucoes: 'CodeMonkey ensina programação através de jogos e desafios divertidos.',
    comoJogar: 'Complete níveis programando um macaco para coletar bananas.',
    precisaInstalar: 'Não, pode ser jogado no navegador.',
    downloads: 'Não é necessário realizar downloads.',
    link: 'https://www.playcodemonkey.com/'
  },
  {
    nome: 'Vim Adventures',
    imagem: imgVimAdventures,
    instrucoes: 'Vim Adventures é um jogo que ensina a usar o editor Vim enquanto você joga.',
    comoJogar: 'Resolva quebra-cabeças e complete níveis usando comandos do Vim.',
    precisaInstalar: 'Não, pode ser jogado no navegador.',
    downloads: 'Não é necessário realizar downloads.',
    link: 'https://vim-adventures.com/'
  },
  {
    nome: 'Elevator Saga',
    imagem: imgElevatorSaga,
    instrucoes: 'Elevator Saga é um jogo onde você controla elevadores programando seu comportamento.',
    comoJogar: 'Escreva código para otimizar o funcionamento dos elevadores.',
    precisaInstalar: 'Não, pode ser jogado no navegador.',
    downloads: 'Não é necessário realizar downloads.',
    link: 'https://play.elevatorsaga.com/'
  },
  {
    nome: 'Flexbox Froggy',
    imagem: imgFlexboxFroggy,
    instrucoes: 'Flexbox Froggy ensina o uso do Flexbox em CSS de forma divertida.',
    comoJogar: 'Complete os níveis ajudando os sapos a se sentarem em seus lírios.',
    precisaInstalar: 'Não, pode ser jogado no navegador.',
    downloads: 'Não é necessário realizar downloads.',
    link: 'https://flexboxfroggy.com/'
  },
  {
    nome: 'Cyber-Dojo',
    imagem: imgCyberDojo,
    instrucoes: 'Cyber-Dojo é uma plataforma onde você pode praticar programação em várias linguagens.',
    comoJogar: 'Escolha uma linguagem, escreva código e veja como se sai em testes.',
    precisaInstalar: 'Não, pode ser jogado no navegador.',
    downloads: 'Não é necessário realizar downloads.',
    link: 'https://cyber-dojo.org/'
  },
  {
    nome: 'CodinGame',
    imagem: imgCodinGame,
    instrucoes: 'CodinGame é uma plataforma onde você pode competir em desafios de programação.',
    comoJogar: 'Resolva problemas de programação e jogue competições online.',
    precisaInstalar: 'Não, pode ser jogado no navegador.',
    downloads: 'Não é necessário realizar downloads.',
    link: 'https://www.codingame.com/'
  },
  {
      nome: 'Untrusted',
      imagem: imgUntrusted,
      instrucoes: 'Untrusted é um jogo de administração de sistemas e segurança.',
      comoJogar: 'Junte-se a um grupo de invasores que tentam entrar no sistema de uma corporação, usando ferramentas de engenharia social.',
      precisaInstalar: 'Sim, é necessário instalar através do Steam.',
      downloads: 'Disponível no Steam.',
      link: 'https://www.playuntrusted.com/' // Link atualizado
  },
  {
    nome: 'Human Resource Machine',
    imagem: imgHRM,
    instrucoes: 'Human Resource Machine é um jogo que ensina lógica de programação através de puzzles.',
    comoJogar: 'Resolva quebra-cabeças programando seu funcionário.',
    precisaInstalar: 'Sim, precisa ser instalado, mas também disponível em navegador.',
    downloads: 'Disponível no Steam e na página oficial.',
    link: 'https://tomorrowcorporation.com/humanresourcemachine'
  }
];

const Modal3 = ({ onClose }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card" style={{ backgroundColor: '#cccccc' }}>
        <header className="modal-card-head">
          <p className="modal-card-title">Jogos para Programadores</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body content">
          {jogos.map((jogo, index) => (
            <div key={index} className="jogo" style={{ marginBottom: '20px' }}>
              <div className="jogo-imagem" style={{ marginBottom: '10px' }}>
                <img src={jogo.imagem} alt={jogo.nome} style={{ maxWidth: '100%' }} />
              </div>
              <div className="jogo-instrucoes">
                <h3>{jogo.nome}</h3>
                <p><strong>Instruções:</strong> {jogo.instrucoes}</p>
                <p><strong>Como Jogar:</strong> {jogo.comoJogar}</p>
                <p><strong>Precisa Instalar?</strong> {jogo.precisaInstalar}</p>
                <p><strong>Downloads:</strong> {jogo.downloads}</p>
                <a 
                  href={jogo.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button is-link"
                >
                  Jogue Agora
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Modal3;

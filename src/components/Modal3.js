import React from 'react';
import imgScratch from '../images/Quinta Etapa/scratch.png'; // Substitua pelo caminho correto da imagem do Scratch
import imgMinecraft from '../images/Quinta Etapa/minecraft-education.png'; // Substitua pelo caminho correto da imagem do Minecraft Education
import imgScreeps from '../images/Quinta Etapa/screeps.png'; // Substitua pelo caminho correto da imagem do Screeps
import imgCodeCombat from '../images/Quinta Etapa/code-combat.png'; // Substitua pelo caminho correto da imagem do Code Combat
import imgCheckio from '../images/Quinta Etapa/checkio.png'; // Substitua pelo caminho correto da imagem do Check.io
import imgCodeMonkey from '../images/Quinta Etapa/codemonkey.png'; // Substitua pelo caminho correto da imagem do CodeMonkey
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

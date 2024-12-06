import React, { useState } from 'react';
import './Modal.css';
import img1 from '../images/TerceiraEtapa/uribeecrowd.jpeg';
import img2 from '../images/TerceiraEtapa/hackerrank.jpg';
import img3 from '../images/TerceiraEtapa/codewars.jpeg';
import img4 from '../images/TerceiraEtapa/khanacademy.png';



const Modal = ({ onClose }) => {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const links = {
    div1: [
      { id: 1, url: 'https://judge.beecrowd.com/pt/problems/view/1138', label: 'Contagem' },
      { id: 2, url: 'https://judge.beecrowd.com/pt/problems/view/1149', label: 'Soma de um conjunto de números' },
      { id: 3, url: 'https://judge.beecrowd.com/pt/problems/view/1153', label: 'Cálculo do Fatorial' },
      { id: 4, url: 'https://judge.beecrowd.com/pt/problems/view/1151', label: 'Geração de sequência de Fibonacci' },
      { id: 5, url: 'https://judge.beecrowd.com/pt/problems/view/1193', label: 'Conversão de base' },
    ],
    div2: [
      { id: 1, url: 'https://www.hackerrank.com/challenges/counter-game/problem', label: 'Contagem' },
      { id: 2, url: 'https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true', label: 'Soma de um conjunto de números' },
      { id: 3, url: 'https://www.hackerrank.com/challenges/extra-long-factorials/problem', label: 'Cálculo do Fatorial' },
      { id: 4, url: 'https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem', label: 'Geração de sequência de Fibonacci' },
      { id: 5, url: 'https://www.hackerrank.com/challenges/30-binary-numbers/problem', label: 'Conversão de base' },
    ],
    div3: [
      { id: 1, url: 'https://www.codewars.com/kata/53dc54212259ed3d4f00071c', label: 'Soma de um conjunto de números' },
      { id: 2, url: 'https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc', label: 'Cálculo do Fatorial' },
      { id: 3, url: 'https://www.codewars.com/kata/5239f06d20eeab9deb00049b', label: 'Geração de sequência de Fibonacci' },
      { id: 4, url: 'https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5', label: 'Inversão dos dígitos de um número inteiro' },
      { id: 5, url: 'https://www.codewars.com/kata/55ee3ebff71e82a30000006a', label: 'Conversão de caractere para número' },
    ],
    div4: [
      { id: 1, url: 'https://pt.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms/v/what-are-algorithms', label: 'Introduçao aos Algoritmos' },
      { id: 2, url: 'https://pt.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion', label: 'Algoritmos recursivos' },
      { id: 3, url: 'https://pt.khanacademy.org/computing/computer-science/informationtheory/info-theory/v/intro-information-theory', label: 'Teoria antiga da informação' },
      { id: 4, url: 'https://pt.khanacademy.org/computing/computer-science/algorithms/towers-of-hanoi/a/towers-of-hanoi', label: 'Torre de Hanoi' },
    ],
  };
  

  const handleDivClick = (div) => {
    setSelectedDiv(div); // Define qual div foi selecionada
  };

  const handleBackClick = () => {
    setSelectedDiv(null); // Volta para o estado inicial (mostrando as imagens)
  };

  const renderLinks = () => {
    return links[selectedDiv].map(link => (
      <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
        {link.label}
      </a>
    ));
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <button className="delete" onClick={onClose}></button>
        </header>

        <section className="modal-card-body content">
          {/* Se uma div for selecionada, mostre os links */}
          {selectedDiv ? (
            <div className="links-container">
              <h2>Links relacionados</h2>
              <ul>
                {renderLinks()}
              </ul>
              <button className="button is-primary" onClick={handleBackClick}>
                Voltar
              </button>
            </div>
          ) : (
            <div className="divs-container">
              {/* Se nenhuma div for selecionada, mostre as três imagens */}
              <div className="clickable-div" onClick={() => handleDivClick('div1')}>
                <img src={img1} alt="Imagem 1" />
                <span>Beecrowd</span>
              </div>
              <div className="clickable-div" onClick={() => handleDivClick('div2')}>
                <img src={img2} alt="Imagem 2" />
                <span>HackerRank</span>
              </div>
              <div className="clickable-div" onClick={() => handleDivClick('div3')}>
                <img src={img3} alt="Imagem 3" />
                <span>CodeWars</span>
              </div>
              <div className="clickable-div" onClick={() => handleDivClick('div4')}>
                <img src={img4} alt="Imagem 4" />
                <span>Khan Academy</span>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Modal;

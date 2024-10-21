import React, { useState } from "react";
import "./Modal2.css"; // Certifique-se de que o arquivo CSS está importado

const Modal = ({ onClose }) => {
  const [copiedMessage, setCopiedMessage] = useState("");
  const [showRedirectButton, setShowRedirectButton] = useState(false);

  const links = [
    { label: "Troca dos Valores de duas variáveis", text: "Texto para o link 1" },
    { label: "Contagem", text: "Texto para o link 2" },
    { label: "Soma de um conjunto de números", text: "Texto para o link 3" },
    { label: "Cálculo do Fatorial", text: "Texto para o link 4" },
    { label: "Cálculo de uma série infinita", text: "Texto para o link 5" },
    { label: "Geração de sequência de Fibonacci", text: "Texto para o link 6" },
    { label: "Inversão dos dígitos de um número inteiro", text: "Texto para o link 7" },
    { label: "Conversão de base", text: "Texto para o link 8" },
    { label: "Conversão de caractere para número", text: "Texto para o link 9" },
  ];

  const handleLinkClick = (label) => {
    const message = `Utilize uma situação do cotidiano para explicar por linha de código, a implementação do algoritmo ${label} em VisuAlg`;
    navigator.clipboard.writeText(message).then(() => {
      setCopiedMessage(message);
      setShowRedirectButton(true);
      alert("Mensagem copiada: " + message);
    });
  };

  const handleRedirect = () => {
    window.open("https://chat.openai.com/chat", "_blank");
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body content">
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <p>Clique em alguns desses algoritmos para começar:</p>
              {links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.label)}
                  className="button is-link"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div style={{ width: "50%", padding: "10px" }}>
              {showRedirectButton && (
                <>
                  <p>Mensagem copiada para o prompt:</p>
                  <pre>
                    <code>{copiedMessage}</code>
                  </pre>
                  <button onClick={handleRedirect} className="button is-primary">
                    Ir para o ChatGPT
                  </button>
                  <p>Por favor, clique no botão acima, cole a mensagem no prompt do ChatGPT e aperte no botão com a seta pra cima que fica ao lado.</p>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;

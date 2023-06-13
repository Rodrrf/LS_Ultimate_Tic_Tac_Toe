import React, { useState } from "react";
import "./panelGame.css"

export default function PanelGame({
    valorButton,
    funcaoAtualizar,
    setNomeJogador1,
    setNomeJogador2,
  }) {
    const[bloquea, setBloquea] = useState("");

    function irJogo() {
     setBloquea(bloquea === "desabilitado" ? "abilitado" : "desabilitado");
     
     funcaoAtualizar();
    }
  
    const handleNomeJogador1Change = (event) => {
      setNomeJogador1(event.target.value);
    };
  
    const handleNomeJogador2Change = (event) => {
      setNomeJogador2(event.target.value);
    };
  
    return (
      <div className="header">
        <div id="header-dentro">
          <div id="nome-jogadores" className={bloquea}>
            <label htmlFor="">Nome do jogador 1</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength="2"
              maxLength="10"
              size="10"
              onChange={handleNomeJogador1Change}
            />
            <label htmlFor="">Nome do jogador 2</label>
            <input 
              type="text"
              id="name"
              name="name"
              required
              minLength="2"
              maxLength="10"
              size="10"
              onChange={handleNomeJogador2Change}
            />
          </div>
          <div id="comecar-jogo">
            <button onClick={irJogo}>{valorButton} </button>
          </div>
        </div>
      </div>
    );
  }
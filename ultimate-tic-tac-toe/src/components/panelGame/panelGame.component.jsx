import React, { useState } from "react";
import "./panelGame.css"

export default function PanelGame({
    valorButton,
    funcaoAtualizar,
    setNomeJogador1,
    setNomeJogador2,
    nome1,
    nome2,
  }) {
    const[bloquea, setBloquea] = useState("");
    const[styleButton, setStyleButton] = useState("first");

    function irJogo() {
      if(nome1 !== "" && nome2 !== ""){

        setBloquea(bloquea === "desabilitado" ? "abilitado" : "desabilitado");
        setStyleButton(styleButton === "first" ? "secund" : "first");
        funcaoAtualizar();
        
      }
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
          <label htmlFor="" ><strong>Nome do jogador X</strong></label>
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
            <label htmlFor="" ><strong>Nome do jogador O</strong></label>
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
            <button className ={styleButton} onClick={irJogo}>{valorButton} </button>
          </div>
        </div>
      </div>
    );
  }
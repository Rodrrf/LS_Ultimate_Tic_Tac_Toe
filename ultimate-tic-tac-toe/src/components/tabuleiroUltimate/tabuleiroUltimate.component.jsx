import React, { useState } from 'react';
import "./tabuleiroUltimate.css"
import TabuleiroMini from "../tabuleiroMini/tabuleiroMini.components";

export default function TabuleiroUltimate() {
    const ganharjogo = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    const [boardUltimate, setBoardUltimate] = useState(Array(9).fill(null));
    const [jogador, setJogador] = useState(true);
    const [valor, setvalor] = useState(true);
    const [fimDeJogo, setFimDeJogo] = useState(false);
    const [estilo, setEstilo] = useState("tabuleiroultimate");
  
    const mudarTabuleiro = (idtabuleiro) => {
      setJogador(!jogador);
    };

    const atualizataboleiro = (numero , valorpassar) =>{
      console.log("chamarao");
      const boardAtualizada = boardUltimate.map((value, id) => {
        if (id === numero) return jogador === true ? "X" : "O";
        else return value;
      });
      verificarVencedor(boardAtualizada);
      setBoardUltimate(boardAtualizada);
      console.log(boardAtualizada);
  }
  
    const verificarVencedor = (boardUltimate) => {
      for (let i = 0; i < ganharjogo.length; i++) {
        const [a, b, c] = ganharjogo[i];
        if (boardUltimate[a] && boardUltimate[a] === boardUltimate[b] && boardUltimate[b] === boardUltimate[c]) {
          setFimDeJogo(true);
          console.log('Verifica = ' +boardUltimate[a]);
          setEstilo("tabuleiroultimates");
          return boardUltimate[a];
        }
      }
    };
  
    const terminarJogo = () => {
      setEstilo("tabuleiroultimates");
      setvalor(false);
    };
  
    return (
    <div className='game'>
      <div className="player">
        <span className={`playerX ${!jogador && "inactive"}`}>Player X  </span>
        <span className={`playerO ${jogador && "inactive"}`}>Player O  </span>
      </div>
      
      <div className={estilo}>
        {boardUltimate.map((value, id) => (
          <TabuleiroMini 
            valor = {valor}
            value={value} 
            key={id} 
            jogador={jogador} 
            onClick={fimDeJogo ? terminarJogo :() => mudarTabuleiro(id)} 
            handlresoltado={atualizataboleiro} numerodataboleiro={id} />
        ))}
      </div>
      <div className='game'></div>
    </div>
    );
  }
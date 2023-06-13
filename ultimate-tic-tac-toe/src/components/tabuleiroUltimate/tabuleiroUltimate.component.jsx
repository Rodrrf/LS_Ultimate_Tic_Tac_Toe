import React, { useState, useEffect } from 'react';
import "./tabuleiroUltimate.css"
import TabuleiroMini from "../tabuleiroMini/tabuleiroMini.components";

export default function TabuleiroUltimate({ nomeJogador1, nomeJogador2 }) {
  const ganharjogo = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const [boardUltimate, setBoardUltimate] = useState(Array(9).fill(null));
  const [jogador, setJogador] = useState(true);
  const [valor, setValor] = useState(true);
  const [fimDeJogo, setFimDeJogo] = useState(false);
  const [estilo, setEstilo] = useState("tabuleiroultimate");
  const [tempoJogador1, setTempoJogador1] = useState(60); // Tempo inicial do jogador 1 (em segundos)
  const [tempoJogador2, setTempoJogador2] = useState(60); // Tempo inicial do jogador 2 (em segundos)

  useEffect(() => {
    // Decrementar o tempo do jogador a cada segundo
    const interval = setInterval(() => {
      if (jogador) {
        setTempoJogador1((tempo) => tempo - 1);
      } else {
        setTempoJogador2((tempo) => tempo - 1);
      }
    }, 1000);

    // Verificar se o tempo acabou para algum jogador
    if (tempoJogador1 === 0 || tempoJogador2 === 0) {
      clearInterval(interval);
      terminarJogo();
    }

    return () => {
      clearInterval(interval);
    };
  }, [jogador, tempoJogador1, tempoJogador2]);

  const mudarTabuleiro = (idtabuleiro) => {
    setJogador(!jogador);
  };

  const atualizarTabuleiro = (numero, valorpassar) => {
    const boardAtualizada = boardUltimate.map((value, id) => {
      if (id === numero) return jogador === true ? "X" : "O";
      else return value;
    });
    verificarVencedor(boardAtualizada);
    setBoardUltimate(boardAtualizada);
  };

  const verificarVencedor = (boardUltimate) => {
    for (let i = 0; i < ganharjogo.length; i++) {
      const [a, b, c] = ganharjogo[i];
      if (boardUltimate[a] && boardUltimate[a] === boardUltimate[b] && boardUltimate[b] === boardUltimate[c]) {
        setFimDeJogo(true);
        setEstilo("tabuleiroultimates");
        return boardUltimate[a];
      }
    }
  };

  const terminarJogo = () => {
    setEstilo("tabuleiroultimates");
    setValor(false);
  };

  return (
    <div className='game'>
      <div className="player">
      <tempo>{tempoJogador1}s</tempo>
        <span className={`playerX ${!jogador && "inactive"}`}>{nomeJogador1}</span>
        <span>vs</span>
       
        <span className={`playerO ${jogador && "inactive"}`}>{nomeJogador2}</span>
        <tempo>{tempoJogador2}s</tempo>
      </div>
      
      <div className={estilo}>
        {boardUltimate.map((value, id) => (
          <TabuleiroMini 
            valor={valor}
            value={value} 
            key={id} 
            jogador={jogador} 
            onClick={fimDeJogo ? terminarJogo : () => mudarTabuleiro(id)} 
            handlresoltado={atualizarTabuleiro} 
            numerodataboleiro={id}
          />
        ))}
      </div>
    </div>
  );
}
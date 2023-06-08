import React, {useState} from 'react';
import "./tabuleiroMini.css"
import Celula from "../celula/celula.component";

export default function TabuleiroMini() {
    const ganharjogo = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    const [board, setBoard] = useState(Array(9).fill(null));
    const [jogador, setJogador] = useState(true);
    const [fimDeJogo, setFimDeJogo] = useState(false);
    const [estilo, setEstilo] = useState("tabuleiromini");
  
    const clicarNaCelula = (idcelula) => {
      const boardAtualizada = board.map((value, id) => {
        if (id === idcelula) return jogador === true ? "X" : "O";
        else return value;
      });
      verificarVencedor(boardAtualizada);
      setBoard(boardAtualizada);
      setJogador(!jogador);
    };
  
    const verificarVencedor = (board) => {
      for (let i = 0; i < ganharjogo.length; i++) {
        const [a, b, c] = ganharjogo[i];
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
          setFimDeJogo(true);
          console.log(board[a]);
          return board[a];
        }
      }
    };
  
    const terminarJogo = () => {
      setEstilo("tabuleiromini estilo");
    };
  
    return (
      
        <div className={estilo}>
          {board.map((value, id) => (
            <Celula value={value} key={id} onClick={fimDeJogo ? terminarJogo : () => value === null && clicarNaCelula(id)}/>
          ))}
        </div>
    );
  }
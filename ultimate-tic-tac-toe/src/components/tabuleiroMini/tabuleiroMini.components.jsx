import React, {useState} from 'react';
import "./tabuleiroMini.css"
import Celula from "../celula/celula.component";

export default function TabuleiroMini({ valor, jogador, onClick, handlresoltado, numerodataboleiro}) {
    const ganharjogo = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    const [board, setBoard] = useState(Array(9).fill(null));
    const [fimDeJogo, setFimDeJogo] = useState(false);
    const [estilo, setEstilo] = useState("tabuleiromini");
  
    const clicarNaCelula = (idcelula) => {
      if (!fimDeJogo && board[idcelula] === null) {
        const boardAtualizada = board.map((value, id) => {
          if (id === idcelula) return jogador === true ? "X" : "O";
          else return value;
        });
        verificarVencedor(boardAtualizada, idcelula);
        setBoard(boardAtualizada);
        onClick(); // Chama a função onClick passada como prop para o TabuleiroMini
      }
    };
  
    const verificarVencedor = (board, idcelula) => {
      let j;
      for (let i = 0; i < ganharjogo.length; i++) {
        const [a, b, c] = ganharjogo[i];
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
          setFimDeJogo(true);
          console.log(board[a]);
          handlresoltado(numerodataboleiro, board[a]);
          jogador ? setEstilo("tabuleiromini XGanhou") : setEstilo("tabuleiromini OGanhou")
          return board[a];
        }
      }

      for(j = 0; j < 9 && board[j] != null; j++);

      if(j === 9){
        setEstilo("tabuleiromini empate");
        console.log("-");
        handlresoltado(numerodataboleiro, "-");
      }

      
    };
  
    const terminarJogo = () => {
      if(estilo !== "tabuleiromini FODASE")
        jogador ? setEstilo("tabuleiromini OGanhou") : setEstilo("tabuleiromini XGanhou");

      console.log('FIM' +valor);
    };
  
    return (
      <div className={estilo}>
        {board.map((value, id) => (
          <Celula
            value={value}
            key={id}
            onClick={valor ? fimDeJogo ? terminarJogo : () => clicarNaCelula(id) : terminarJogo}
          />
        ))}
      </div>
    );
  }
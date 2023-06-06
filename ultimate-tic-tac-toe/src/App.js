import React, {useState} from 'react';
import './App.css';
import TabuleiroMini from './components/tabuleiroMini/tabuleiroMini.components';

function App() {

  const ganharjogo =[[0,1,2],[3,4,5],[6,7,8],
                 [0,3,6],[1,4,7],[2,5,8],
                 [0,4,8],[2,4,6]]

  const [board, setboard] = useState(Array(9).fill());
  const [jogador, setjogador] = useState(true);
  const [fimDeJogo, setfimDeJogo] = useState(false);
  const [estilo, setestilo] = useState("App")

    const clicarnacelula = (idcelula) =>{
    const boardatulizada = board.map((value, id) =>{

      if(id === idcelula) return jogador === true ? "X" : "O";
      else return value;

    })
    verVencedor(boardatulizada);
    setboard(boardatulizada);
    setjogador(!jogador);
  }

  const verVencedor = (board) =>{
    for(let i = 0; i < ganharjogo.length; i++){
      const [a,b,c] = ganharjogo[i];

      if(board[a] && board[a] === board[b] && board[b] === board[c]){
        setfimDeJogo(true);
        console.log(board[a]);
        return board[a];
      }

    }
  }

  const terminarjogo = () => {
    setestilo("App estilo");
  }

  return (
    <div className={estilo} >
      <TabuleiroMini board={board} onClick={fimDeJogo ? terminarjogo : clicarnacelula}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import TabuleiroUltimate from './components/tabuleiroUltimate/tabuleiroUltimate.component';
import PanelGame from './components/panelGame/panelGame.component';
import Footer from './components/footer/footer';

export default function App() {
  const [jogo, setJogo] = useState(false);
  const [valorButton, setValorButton] = useState("Jogar");
  const [nomeJogador1, setNomeJogador1] = useState("");
  const [nomeJogador2, setNomeJogador2] = useState("");

  const atualizarNomes = () => {
    setJogo(!jogo);
    setValorButton(valorButton === "Jogar" ? "Reset" : "Jogar");
  };

  return (
    <div className="App">
      <PanelGame
        valorButton={valorButton}
        funcaoAtualizar={atualizarNomes}
        setNomeJogador1={setNomeJogador1}
        setNomeJogador2={setNomeJogador2}
        
      />
      {jogo && (
        <TabuleiroUltimate
          nomeJogador1={nomeJogador1}
          nomeJogador2={nomeJogador2}
        />
       
      )}
      <Footer nome1 = {"Paulo Sa - 2021142819"} nome2 = {"Rodrigo Ferreira - 2021139149"}/>
    </div>
  );
}

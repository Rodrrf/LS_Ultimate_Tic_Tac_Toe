import React, { useState } from 'react';
import './App.css';
import TabuleiroUltimate from './components/tabuleiroUltimate/tabuleiroUltimate.component';
import PanelGame from './components/panelGame/panelGame.component';
export default function App() {
  const [jogo, setjogo] = useState(false);
  const [valorbutton, setvalorbutton] = useState("Jogar");

  const atulizarnomes = () => {

    setjogo(!jogo);

    if(valorbutton === "Jogar"){

      setvalorbutton("Reset");
    }else{

      setvalorbutton("Jogar");
    }

    }

  return (
    
      <div className='App'>
        <PanelGame valorbutton = {valorbutton} funcaoAtulizar = {atulizarnomes} jogo={jogo}/>
       {jogo && <TabuleiroUltimate/>}

       
      </div>
      
    
  );
}

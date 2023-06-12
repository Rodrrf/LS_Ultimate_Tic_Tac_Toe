import React, { useState } from 'react';
import './App.css';
import TabuleiroUltimate from './components/tabuleiroUltimate/tabuleiroUltimate.component';
import Header from './components/header/header.component';
export default function App() {
  const [jogo, setjogo] = useState(true);
  const [valorbutton, setvalorbutton] = useState("jogar"); 
  return (
    
      <div className='App'>
        <Header valorbutton = {valorbutton}/>
       {jogo && <TabuleiroUltimate/>}
       <button className= "reza"onClick={ () => setjogo(!jogo)}>teste fim de jogo</button>

       
      </div>
      
    
  );
}

import React from 'react';
import './App.css';
import TabuleiroUltimate from './components/tabuleiroUltimate/tabuleiroUltimate.component';
import ControlPanel from './components/panelGame/panelGame.component';
export default function App() {
  
  return (
    <div>
      <div id="container">
        <div className="main-content"><ControlPanel/></div>
      </div>
      <div className='App'>
       <TabuleiroUltimate/>
      </div>
      
    </div>
  );
}

import React from "react";
import "./tabuleiroMini.css"
import Celula from "../celula/celula.component";

export default function TabuleiroMini({board, onClick}){
    return (
        <div className="tabuleiromini">
            {board.map((value, id) =>{ 
              return <Celula value={value} onClick={()=>onClick(id)}/>
            })}
        </div>
    )
}
import React from "react";
import { useState } from 'react';
import "./celula.css"

export default function Celula(props){
    const {jogador} = props;
    const [value, setValue] = useState(null);

    function switchplay(){
        console.log(jogador);
        if(jogador)
            setValue('X');
        else
            setValue('O');
            
        
        
    }
    return (
        <div className="celula jogavel" onClick={switchplay}>{value}</div>
    )

}
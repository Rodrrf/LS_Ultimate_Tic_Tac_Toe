import React from "react";
import "./panelGame.css"

export default function PanelGame({valorbutton, funcaoAtulizar, jogo}){

    function irjogo(){

        funcaoAtulizar();
        valorbutton = "reset";
    }
 

    return (
        <div className="header">
            <form id= "header-dentro">
                {<div id="nome-jogadores">
                    <label htmlFor="">nome do jogador 1</label>
                    <input type="text" id="name" name="name" required
       minlength="2" maxlength="5" size="10"></input>
                    <label htmlFor="">nome do jogador 2</label>
                    <input type="text" id="name" name="name" required
       minlength="2" maxlength="5" size="10"></input>
                </div>}
                <div id="comecar-jogo">
                    <button onClick ={irjogo} >{valorbutton}</button>
                </div>
            </form>

        </div>
    )

}
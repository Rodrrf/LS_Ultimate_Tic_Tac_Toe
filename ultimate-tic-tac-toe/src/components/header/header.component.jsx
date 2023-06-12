import React from "react";
import "./header.css"

export default function Header({valorbutton}){

    return (
        <div className="header">
            <form id= "header-dentro">
                <div id="nome-jogadores">
                    <label htmlFor="">nome do jogador 1</label>
                    <input type="text" id="name" name="name" required
       minlength="2" maxlength="5" size="10"></input>
                    <label htmlFor="">nome do jogador 2</label>
                    <input type="text" id="name" name="name" required
       minlength="2" maxlength="5" size="10"></input>
                </div>
                <div id="comecar-jogo">
                    <button>{valorbutton}</button>
                </div>
            </form>

        </div>
    )

}
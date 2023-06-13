import React from "react";

import "./footer.css"

export default function Footer({nome1, nome2}){

    return (
        <footer>
            <h4>Trabalho realizado por: {nome1} | {nome2}</h4>              
        </footer>
    )

}
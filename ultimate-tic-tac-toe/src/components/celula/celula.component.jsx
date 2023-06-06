import React from "react";

import "./celula.css"

export default function Celula({value, onClick}){
    const style = value === "X" ? "celula X" : "celula O";

    return (
        <button className={style} onClick={onClick}>{value}</button>
    )

}
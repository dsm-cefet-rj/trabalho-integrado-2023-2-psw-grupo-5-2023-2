import React from "react";
import '../styles/listas.css'
import Ingrediente from './Ingrediente'

export function Lista({novo, nomeObjetos}) {
    
    return (
        <div id="listas">
            <button className="novo-objeto">{nomeObjetos}</button>
            <Ingrediente></Ingrediente>
            <Ingrediente></Ingrediente>
            <Ingrediente></Ingrediente>
        </div>
    )
}
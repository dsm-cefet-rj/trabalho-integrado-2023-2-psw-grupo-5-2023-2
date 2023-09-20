import React from "react";
import '../styles/listas.css'
import Ingrediente from './Ingrediente'
import { Link } from "react-router-dom"

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
import React, { useEffect, useState } from "react";
import '../styles/listas.css'
import Ingrediente from './Ingrediente'
import { Link } from "react-router-dom"

export function Lista({rotaNovoObj, nomeObjetos, objetos}) {
     
    return (
        <div id="listas">
            <Link to={rotaNovoObj}>
                <button id="novo-objeto">{nomeObjetos}</button>
            </Link>
            {
                objetos.map((obj) => (
                    <Ingrediente
                    nome={obj.nome}
                    qtd={obj.qtd}
                    medida={obj.medida}
                    ></Ingrediente>
                    
                ))
            }
            
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom"

export function Lista({rotaNovoObj, nomeObjetos}) {
     
    return (
        <div id="listas">
            <Link to={rotaNovoObj}>
                <button id="novo-objeto">{nomeObjetos}</button>
            </Link>
            
        </div>
    )
}
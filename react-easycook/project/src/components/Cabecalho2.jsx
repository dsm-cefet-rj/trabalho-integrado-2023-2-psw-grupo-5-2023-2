import React from "react"
import seta from "../../src/images/icone-seta-branca.png"
import "../../src/styles/cabecalho2.css"

export default function Cabecalho2(){
    return (
        <div className='Cabecalho2'>

            <img src={seta} className="icone-seta-branca" alt="icone-seta-branca"/>
            <h2> Editar </h2>
            
        </div>
    )
}
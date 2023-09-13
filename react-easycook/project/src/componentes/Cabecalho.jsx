import React from "react"
import seta from "../../src/imagens-icones/icone-seta-branca.png"
import "../../src/styles/cabecalho.css"

export default function Cabecalho(props){
    return (
        <div className='Cabecalho'>

            <a href="#pagina-anterior"><img src={seta} className="icone-seta-branca" alt="icone-seta-branca"/></a>
            <h2 className="titulo"> {props.titulo} </h2>
            
        </div>
    )
}
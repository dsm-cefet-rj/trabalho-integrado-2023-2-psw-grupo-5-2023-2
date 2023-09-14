import React from "react"
import seta from "../../src/images/icone-seta-branca.png"
import "../../src/styles/cabecalho.css"
import HomePage from "../pages/HomePage"

export default function Cabecalho(props){
    return (
        <div className='Cabecalho'>

            <img src={seta} className="icone-seta-branca" alt="icone-seta-branca"/>
            <h2 className="titulo"> {props.titulo} </h2>
            
        </div>
    )
}
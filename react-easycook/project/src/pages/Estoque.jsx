import React from 'react'
import logo from '../images/easycook1-nobg.png'
import '../styles/login.css'
import Rodape from '../components/Rodape'
import Ingrediente from '../components/Ingrediente'
import Cabecalho from '../components/Cabecalho'

export default function Estoque(){
    return (
        <div>
            <div>
                <Cabecalho></Cabecalho>
            </div>
            <div id='estoque'>
                <br /><br /><br /><br /><br />
                <Ingrediente></Ingrediente>
            </div>
        </div>
    )
}
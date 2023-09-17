import React from 'react'
import logo from '../images/easycook1-nobg.png'
import '../styles/estoque.css'
import Rodape from '../components/Rodape'
import Ingrediente from '../components/Ingrediente'
import Cabecalho from '../components/Cabecalho'

export default function Estoque(){
    return (
        <div>
            <div>
                <Cabecalho titulo="Estoque" home filtro></Cabecalho>
            </div>
            <div id='estoque'>
                <div className='lista-ingredientes'>
                    <button>Novo Ingrediente</button>
                    <Ingrediente></Ingrediente>
                    <Ingrediente></Ingrediente>
                    <Ingrediente></Ingrediente>
                </div>
            </div>
        </div>
    )
}
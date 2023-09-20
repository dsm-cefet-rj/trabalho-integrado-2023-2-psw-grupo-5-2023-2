import React from 'react'
import logo from '../images/easycook1-nobg.png'
import '../styles/estoque.css'
import Rodape from '../components/Rodape'
import Ingrediente from '../components/Ingrediente'
import Cabecalho from '../components/Cabecalho'

export default function Receitas(){
    return (
        <div>
            <div>
                <Cabecalho titulo="Receitas" home filtro></Cabecalho>
            </div>
            <div id='receitas'>
                <div className='lista-receitas'>
                    <button>Nova Receita</button>
                    <Ingrediente></Ingrediente>
                    <Ingrediente></Ingrediente>
                    <Ingrediente></Ingrediente>
                </div>
            </div>
        </div>
    )
}
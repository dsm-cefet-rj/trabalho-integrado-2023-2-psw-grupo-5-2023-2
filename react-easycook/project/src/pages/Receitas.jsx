import React from 'react'
import '../styles/estoque.css'
import Cabecalho from '../components/Cabecalho'
import { Lista } from '../components/Listas'
import Rodape from '../components/Rodape'

export default function Receitas(){
    return (
        <div>
            <div>
                <Cabecalho titulo="Receitas" home filtro></Cabecalho>
            </div>
            <div id='receitas'>
                <div className='lista-receitas'>
                    <Lista nomeObjetos="Nova Receita"></Lista>
                    <Rodape></Rodape>
                </div>
            </div>
        </div>
    )
}
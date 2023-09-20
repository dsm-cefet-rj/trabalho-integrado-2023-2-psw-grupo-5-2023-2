import React from 'react'
import '../styles/estoque.css'
import Rodape from '../components/Rodape'
import Ingrediente from '../components/Ingrediente'
import Cabecalho from '../components/Cabecalho'
import { Lista } from '../components/Listas'

export default function Estoque(){
    return (
        <div>
            <div>
                <Cabecalho titulo="Estoque" home filtro></Cabecalho>
            </div>
            <div id='estoque'>
                <div className='lista-ingredientes'>
                    <Lista nome="estoque" nomeObjetos="Novo Ingrediente"></Lista>
                    <Rodape></Rodape>
                </div>
            </div>
        </div>
    )
}
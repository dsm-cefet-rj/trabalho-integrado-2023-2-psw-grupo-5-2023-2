import React from 'react'
import '../styles/estoque.css'
import Ingrediente from '../components/Ingrediente'
import Cabecalho from '../components/Cabecalho'
import { Lista } from '../components/Listas'

export default function ListaDeCompras(){
    return (
        <div>
            <div>
                <Cabecalho titulo="Listas de Compras" home filtro></Cabecalho>
            </div>
            <div id='lista-de-compras'>
                <div className='lista-ingredientes'>
                    <Lista nome="listas-de-compras" nomeObjetos="Lista de Compras"></Lista>
                </div>
            </div>
        </div>
    )
}
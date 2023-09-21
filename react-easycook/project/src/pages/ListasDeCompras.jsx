import React from 'react'
import '../styles/estoque.css'
import Ingrediente from '../components/Ingrediente'
import Cabecalho from '../components/Cabecalho'
import { Lista } from '../components/Listas'
import Rodape from '../components/Rodape'
import Compras from '../components/ListasCompras'

export default function ListaDeCompras(){
    let listasDeCompras = [];
    return (
        <div>
            <div>
                <Cabecalho titulo="Listas de Compras" home filtro></Cabecalho>
            </div>
            <div id='lista-de-compras'>
                <div className='lista-ingredientes'>
                    <Lista
                        nomeObjetos="Nova Lista de Compras"
                        rotaNovoObj="/nova-lista-de-compras"
                        objetos={listasDeCompras}
                    ></Lista>
                    <div className='listas'>
                        <Compras/>
                        <Compras/>
                        <Compras/>
                        <Compras/>
                    </div>
                    <Rodape></Rodape>
                </div>
            </div>
        </div>
    )
}
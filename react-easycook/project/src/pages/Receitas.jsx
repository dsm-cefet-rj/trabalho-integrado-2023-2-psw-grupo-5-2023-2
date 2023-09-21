import React from 'react'
import '../styles/estoque.css'
import Cabecalho from '../components/Cabecalho'
import { Lista } from '../components/Listas'
import Rodape from '../components/Rodape'
import Receita from '../components/Receita'
import '../styles/listas.css'

export default function Receitas(){
    let receitas = [];
    return (
        <div>
            <div>
                <Cabecalho titulo="Receitas" home filtro></Cabecalho>
            </div>
            <div id='receitas'>
                <div className='lista-receitas'>
                    <Lista 
                        nomeObjetos="Nova Receita"
                        rotaNovoObj="/nova-receita"
                        objetos={receitas}
                    ></Lista>
                    <div className='listas'>
                        <Receita></Receita>
                        <Receita></Receita>
                        <Receita></Receita>
                        <Receita></Receita>
                    </div>
                    
                    <Rodape></Rodape>
                </div>
            </div>
        </div>
    )
}
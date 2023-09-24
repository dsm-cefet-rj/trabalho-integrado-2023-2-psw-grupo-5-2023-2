import React from 'react'
import Cabecalho from '../components/Cabecalho'
import ContainerBodyNovaPagina from '../components/ContainerBody'


export default function NovaListaDeCompras(){
    return (
        <div>
            <Cabecalho 
                titulo="Nova Receita"
                fundo="escuro"
            ></Cabecalho>
            <ContainerBodyNovaPagina tipoBody='nova-receita'></ContainerBodyNovaPagina>
        </div>
    )
}





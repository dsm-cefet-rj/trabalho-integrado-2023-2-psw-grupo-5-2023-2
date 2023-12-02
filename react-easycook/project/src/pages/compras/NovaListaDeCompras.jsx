import React from 'react'
import Cabecalho from '../../components/compartilhados/Cabecalho'
import ContainerBodyLC from '../../components/ContainerBodyLC'


export default function NovaListaDeCompras(){
    return (
        <div>
            <Cabecalho 
                titulo="Nova Lista De Compras"
                fundo="escuro"
            ></Cabecalho>
            <ContainerBodyLC></ContainerBodyLC>
        </div>
    )
}





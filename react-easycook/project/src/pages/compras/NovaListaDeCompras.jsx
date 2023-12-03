import React from 'react'
import Cabecalho from '../../components/compartilhados/Cabecalho'
import BodyNovaListaDeCompras from './BodyNovaListaDeCompras'


export default function NovaListaDeCompras(){
    return (
        <div>
            <Cabecalho 
                titulo="Nova Lista De Compras"
                fundo="escuro"
            ></Cabecalho>
            <BodyNovaListaDeCompras></BodyNovaListaDeCompras>
        </div>
    )
}





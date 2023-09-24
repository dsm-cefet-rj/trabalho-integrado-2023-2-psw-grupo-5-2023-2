import React from 'react'
import Cabecalho from '../components/Cabecalho'
import ContainerBodyNovaPagina from '../components/ContainerBody'
import '../styles/NovoIngrediente.css'

export default function App(){
   return (
      <div>
             <Cabecalho 
               titulo='Novo Ingrediente'
               fundo='escuro'
            />
            <ContainerBodyNovaPagina tipoBody='novo-ingrediente'></ContainerBodyNovaPagina>
      </div>
   )
}
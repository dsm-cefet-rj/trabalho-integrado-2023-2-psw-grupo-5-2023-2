import React from 'react'
import Cabecalho from './Cabecalho'
import ContainerBody from './ContainerBody'
import '../styles/App.css'

export default function App(){
   return (
      <div>
             <Cabecalho 
               titulo='Novo Ingrediente'
            />
            <ContainerBody
              
            />
         
      </div>
   )
}
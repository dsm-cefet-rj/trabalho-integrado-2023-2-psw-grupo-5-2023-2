import React from 'react'
import Cabecalho from './Cabecalho'
import ContainerBody from './ContainerBody'

export default function App(){
   return (
      <div>
         <div>
             <Cabecalho 
               titulo='Novo Ingrediente'
            />
         </div>
        
         <ContainerBody></ContainerBody>
      </div>
   )
}
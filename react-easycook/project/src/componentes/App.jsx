import React from 'react'
import Cabecalho from './Cabecalho'
import ContainerBody from './ContainerBody'

export default function App(){
   return (
      <div>
         <div className='header-tipo1'>
             <Cabecalho 
               titulo='Novo Ingrediente'
         />
         </div>
        
         <ContainerBody></ContainerBody>
      </div>
   )
}
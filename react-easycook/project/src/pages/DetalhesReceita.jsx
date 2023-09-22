import React from 'react'
import Cabecalho from '../components/Cabecalho'
import img from '../images/quadrado-vinho.jpg'
import '../styles/detalhesIngrediente.css'


export default function DetalhesReceita(){
   
    return (
        <div>
            <Cabecalho titulo="Detalhes"></Cabecalho>
            <div className='corpo'>
              <img src={img} className="imagem-quadrado" alt='img-igrediente'/> 
                <h1> Nome da Receita</h1>
                <span> Categoria </span>
                
                <p> exemplo de Categoria </p>
                <span> Ingredientes </span>
               
                <ul class='ingsReceita'>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                </ul>
                
                     <span> Modo de Preparo </span>
                     <label class='preparo'> Primeiro passo;<br/>
                        Segundo Passo;<br/>
                        Terceiro Passo; </label>
            </div>
        </div>
    )
}





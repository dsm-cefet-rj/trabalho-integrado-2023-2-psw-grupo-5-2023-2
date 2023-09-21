import React from 'react'
import Cabecalho from '../components/Cabecalho'
import '../styles/detalhesIngrediente.css'
import img from '../images/quadrado-vinho.jpg'

export default function DetalhesIngrediente(){
    return (
        <div className='DetalhesIngrediente'>
            <Cabecalho titulo="Detalhes" fundo='claro'/>
            <div className='corpo'>
                <img src={img} class="imagem-quadrado" alt='img-igrediente'/>
                <h1> Nome do Ingrediente </h1>
                <span> Categoria </span>
                <p> Categoria </p>
                <span> Substitutos </span>
                
                <table id="tabela-substitutos">
                    <tr>
                        <td><a href="">Ingrediente 1</a></td>
                    </tr>
                    <tr>
                        <td><a href="">Ingrediente 5</a></td>
                    </tr>
                    <tr>
                        <td><a href="">Ingrediente 10</a></td>
                    </tr>
                </table>
            </div>
            
        </div>
    )
}
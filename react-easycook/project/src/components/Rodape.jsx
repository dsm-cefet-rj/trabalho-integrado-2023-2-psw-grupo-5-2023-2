import React from 'react'
import '../styles/rodape.css'
import iconeHomePage from '../images/menu-home-page.png'
import iconeCompras from '../images/menu-lista-compras.png'
import iconeIngrediente from '../images/menu-ingredientes.png'
import iconeReceitas from '../images/menu-receitas.png'
import iconeFavoritos from '../images/menu-favorito.png'

export default function Rodape(){
    return (
        <nav className='Rodape'>
            
            <img src={iconeHomePage} className='icone-home-page' alt='icone-home-page'></img>
            <img src={iconeCompras} className='icone-compras' alt='icone-compras'></img>
            <img src={iconeIngrediente} className='icone-ingrediente' alt='icone-ingrediente'></img>
            <img src={iconeReceitas} className='icone-receita' alt='icone-receita'></img>
            <img src={iconeFavoritos} className='icone-favorito' alt='icone-favorito'></img>
            
        </nav>
    )
}
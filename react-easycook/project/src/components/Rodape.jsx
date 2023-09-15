import React from 'react'
import '../styles/rodape.css'
import iconeHomePage from '../images/menu-home-page.png'
import iconeCompras from '../images/menu-lista-compras.png'
import iconeIngrediente from '../images/menu-ingredientes.png'
import iconeReceitas from '../images/menu-receitas.png'
import iconeFavoritos from '../images/menu-favorito.png'

//LINK do ROUTER
import {Link} from 'react-router-dom'

export default function Rodape(){
    return (
        <nav className='Rodape'>
            <Link to='/'><img src={iconeHomePage} className='icone-home-page' alt='icone-home-page'></img></Link>
            <Link to=''><img src={iconeCompras} className='icone-compras' alt='icone-compras'></img></Link>
            <Link to=''><img src={iconeIngrediente} className='icone-ingrediente' alt='icone-ingrediente'></img></Link>
            <Link to=''><img src={iconeReceitas} className='icone-receita' alt='icone-receita'></img></Link>
            <Link to=''><img src={iconeFavoritos} className='icone-favorito' alt='icone-favorito'></img></Link>
        </nav>
    )
}
import React from "react"
import '../styles/contentHP.css'

export default function ContentHP(){
    return (
        <div className='ContentHP'>
            <div className="bloco1">
                 <h2>Em falta!</h2>
                 <ul>
                    <li>Ingrediente 1</li>
                    <li>Ingrediente 2</li>
                    <li>Ingrediente 3</li>
                 </ul>
                 <button>Nova Lista de Compras</button>
            </div>
            <div className="bloco2">
            <h2>Em falta!</h2>
                 <p>Lista de ingredientes ou modo de preparo da receita selecionada nesse painel.</p>
                 <button>Nova Lista de Compras</button>
            </div>
        </div>
    )
}
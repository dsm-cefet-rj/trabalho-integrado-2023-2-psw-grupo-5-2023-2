import React from "react"
import '../styles/contentHP.css'
import { Link } from "react-router-dom"

export default function ContentHP(){
    return (
        <div className='card-group'>
            <div className="card text-center bg-branco rounded-3 mx-2">
                <h1 className="card-header border-0 cor-titulo">Em falta!</h1>
                <div className="card-body">
                    <ul>
                       <li>Ingrediente 1</li>
                       <li>Ingrediente 2</li>
                       <li>Ingrediente 3</li>
                       <li>Ingrediente 3</li>
                    </ul>
                </div>
                <div className="card-footer bg-branco border-0">
                    <Link to='nova-lista-de-compras' className="btn btn-primary text-branco mx-2 mb-2 col-6">Nova Lista de Compras</Link>
                </div>
            </div>
                <div className="card text-center bg-branco rounded-3 mx-auto">
                    <h1 className="card-header border-0  cor-titulo">Em falta!</h1>
                    <div className="card-body">
                        <p>Lista de ingredientes ou modo de preparo da receita selecionada nesse painel.</p>
                    </div>
                     
                    <div className="card-footer bg-branco border-0">
                        <Link to='nova-lista-de-compras' className="btn btn-primary text-branco mx-auto mb-2 col-6">Nova Lista de Compras</Link>
                    </div>
            </div>
        </div>
    )
}
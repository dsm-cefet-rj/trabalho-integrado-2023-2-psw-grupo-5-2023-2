import React from "react"
import '../styles/contentHP.css'
import { Link } from "react-router-dom"

export default function ContentHP({ingredientes}){
    const ingredientesPouco = ingredientes.filter(ingrediente => ingrediente.qtd < 3 && ingrediente.qtd != 0);
    const ingredienteNada = ingredientes.filter(ingrediente => ingrediente.qtd == 0);
    return (
        <div className='card-group'>
            <div className="card text-center bg-branco rounded-3 mx-2">
                <h1 className="card-header border-0 cor-titulo">Em falta!</h1>
                <div className="card-body">
                    <ul>
                       {ingredienteNada.map((ingrediente) => (
                        <li key={ingrediente._id}>{ingrediente.nome}: {ingrediente.qtd} {ingrediente.medida}</li>
                       ))}
                    </ul>
                </div>
                <div className="card-footer bg-branco border-0">
                    <Link to='nova-lista-de-compras' className="btn btn-primary text-branco mx-2 mb-2 col-6">Nova Lista de Compras</Link>
                </div>
            </div>
                <div className="card text-center bg-branco rounded-3 mx-auto">
                    <h1 className="card-header border-0  cor-titulo">Acabando!</h1>
                    <div className="card-body">
                        <ul>
                            {ingredientesPouco.map((ingrediente) => (
                            <li key={ingrediente._id}>{ingrediente.nome}: {ingrediente.qtd} {ingrediente.medida}</li>
                        ))}
                        </ul>
                    </div>
                     
                    <div className="card-footer bg-branco border-0">
                        <Link to='nova-lista-de-compras' className="btn btn-primary text-branco mx-auto mb-2 col-6">Nova Lista de Compras</Link>
                    </div>
            </div>
        </div>
    )
}


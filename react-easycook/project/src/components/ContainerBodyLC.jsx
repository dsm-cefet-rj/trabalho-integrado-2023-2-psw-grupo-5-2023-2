import React from 'react'
import '../styles/container.css'

export default function ContainerBodyLC(){
    return (
        <div className='Container'>
            <form className='grid' id='form'>
                <div className='area1'>
                    <div className='area-nome'>
                        <label> Nome </label>
                        <br></br>
                        <input placeholder='Nome' type='text' id='criar-nome-ing'></input>
                    </div>
                    <div className='area-categoria'>
                        <label> Ingredientes </label>
                        <br></br>
                        <select className='categoria'>
                            <option>Ingrediente 1</option>
                            <option>Ingrediente 2</option>
                            <option>Ingrediente 3</option>
                        </select>
                    </div>
                </div>
                <div className='area3'>
                    <div className='area-descricao'>
                        <label> Descrição </label>
                        <br></br>
                        <textarea cols="33" rows="6" placeholder="Descrição da Lista de Compras"></textarea>
                    </div>
                    <button type='submit'> Criar </button>
                </div>
            </form>
        </div>
    )
}
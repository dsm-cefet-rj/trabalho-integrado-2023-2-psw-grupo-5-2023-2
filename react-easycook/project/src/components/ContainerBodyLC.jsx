import React from 'react'
import '../styles/containerLC.css'

export default function ContainerBodyLC(){
    return (
        <div className='Container'>
            <form>
                <div className="mb-3 row mb-3">
                    <label for="nome-lista" className="form-label">Nome</label>
                    <input type="text" className="form-control width bg-branco cor-cinza" id="nome-lista" aria-describedby="nome-lista"/>
                </div>
                <div className="mb-3 row mb-3">
                    <label for="ingrediente-form" className="form-label">Ingredientes</label>
                    <select className="form-select width bg-branco cor-cinza" id="ingredientes-form" aria-describedby="ingredientes-form">
                        <option>Escolha os ingredientes</option>
                        <option>Ingrediente 1</option>
                        <option>Ingrediente 2</option>
                        <option>Ingrediente 3</option>
                    </select>
                </div>
                <div className='row mb-3'>
                <div className='section'>
                   <div className='div-ing'>
                        <label for="Qtd">Ingrediente </label>
                        <input className="Qtd" type="number" name="Qtd" id="Qtd" placeholder="Qtd" min="1" step="1"/>
                        <label for="Qtd">Un</label>
                   </div>
                   <br></br>
                   <div className='div-ing'>
                   <label for="Qtd">Ingrediente </label>
                        <input className="Qtd" type="number" name="Qtd" id="Qtd" placeholder="Qtd" min="1" step="1"/>
                        <label for="Qtd">Kg</label>
                    </div>
                    <br></br>
                    <div className='div-ing'>
                   <label for="Qtd">Ingrediente </label>
                        <input className="Qtd" type="number" name="Qtd" id="Qtd" placeholder="Qtd" min="100" step="50"/>
                        <label for="Qtd">mL</label>
                    </div>
                </div>
                
              
                <div className="mb-3 row mb-3">
                    <label for="descricao-lista" className="form-label">Descrição</label>
                    <textarea className="form-control width bg-branco cor-cinza" id="descricao-lista" rows="3"></textarea>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary row mb-3" >Criar</button>
                </div>
                    
                </div>
            </form>
        </div>
    )
}
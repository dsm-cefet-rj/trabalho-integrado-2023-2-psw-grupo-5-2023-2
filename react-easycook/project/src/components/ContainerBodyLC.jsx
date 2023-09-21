import React from 'react'
import '../styles/containerLC.css'

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
                    <div className='area-ingredientes'>
                        <label> Ingredientes </label>
                        <br></br>
                        <select className='ingredientes'>
                            <option>Ingrediente 1</option>
                            <option>Ingrediente 2</option>
                            <option>Ingrediente 3</option>
                        </select>
                    </div>
                </div>
                <div className='area3'>
                <div className='section'>
                   <div className='div-ing'>
                        <label for="Qtd">Ingrediente </label>
                        <input className="Qtd" type="number" name="Qtd" id="Qtd" placeholder="Qtd" min="1" step="1"/>
                        <label for="Qtd">Un</label>
                   </div>
                </div>
                
              
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
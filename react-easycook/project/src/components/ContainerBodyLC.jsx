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
                <section style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '15px',
                width: '190px'
                }}>
                <div style={{color: 'gray'}}>
                <label for="">Ingrediente  <input  style={{width: '60px'}} class="qtd" type="number" name="Qtd" id="Qtd" placeholder="Qtd"/> Un</label><br />
                <label for="">Ingrediente  <input style={{width: '60px'}}class="qtd" type="number" name="Qtd" id="Qtd" placeholder="Qtd"/> Kg</label><br />
            <label>Ingrediente  <input style={{width: '60px'}}class="qtd" type="number" name="Qtd" id="Qtd" placeholder="Qtd"/> mL</label>
            </div>
                </section>
                
              
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
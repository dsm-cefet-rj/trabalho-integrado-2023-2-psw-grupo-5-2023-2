import React from "react"
import img from "../../src/images/quadrado-vinho.jpg"
import '../styles/container.css'

export default function ContainerBody(){
    return (
        <div className="Container" id="container">
            
            <form className="grid" id="form">
                <div>
                    <img src={img} className="quadrado" alt="imagem-ingrediente"/>
                </div>
            <div className="area1">
                <div className="area-nome">
                    <label> Nome </label>
                    <br></br>
                    <input placeholder="Nome" type="text" id="criar-nome-ing"/>
                </div>
                
                <div className="area-categoria">
                    <label> Categoria Principal </label>
                    <br></br>
                    <select className="categoria"> 
                    <option> Categoria 1</option>
                    <option> Categoria 2 </option>
                    <option> Categoria 3 </option>
                    <option> Categoria 4 </option>
                </select>
                </div>
                
                <div className="area-ingrediente">
                    <label> Ingredientes </label>
                    <br></br>
                    <select style={{width:'70%'}} className="ingrediente"> 
                    <option> Ingrediente 1</option>
                    <option> Ingrediente 2 </option>
                    <option> Ingrediente 3 </option>
                    <option> Ingrediente 4 </option>
                </select>
                <div id= "buttons" style={{width:'15%'}}className="buttons">
                <button>+</button>
                <button>-</button>
                </div>
                </div>
        </div>
        <div className="area2">
                
                 <div className="area-outras-categorias">
                    <label> Outras Categorias </label>
                    <br></br>
                    <select className="outras-categorias"> 
                    <option> Outras Categorias 1 </option>
                    <option> Outras Categorias 2 </option>
                    <option> Outras Categorias 3 </option>
                    <option> Outras Categorias 4 </option>
                </select>
                </div>
               
               </div> 
               
               <div className="area3">
               
                
               <div className="area-substitutos">
                <label> Substitutos </label>
                <br></br>
                    <select className="substitutos"> 
                    <option> Substituto 1 </option>
                    <option> Substituto 2 </option>
                    <option> Substituto 3 </option>
                    <option> Substituto 4 </option>
                    </select>
               </div>
                
               <div className="area-descricao">
                <label> Descrição e Modo de Preparo </label>
                <br></br>
                    <textarea cols="33" rows="6">Descrição e Modo de Preparo</textarea>
               </div>
               
                    <button type="submit"> Criar </button>
               
        </div>
            </form>
        </div>
    )
}
import React from "react"
import img from "../../src/images/quadrado-vinho.jpg"
import '../styles/container.css'

export default function ContainerBody(){
    return (
        <div className="Container">
            <img src={img} className="quadrado" alt="imagem-ingrediente"/>
            <form className="form">
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
                
                <div className="area-medidas">
                    <label> Medidas </label>
                    <br></br>
                    <select className="medida"> 
                    <option> Kg</option>
                    <option> g </option>
                    <option> unidade </option>
                    <option> mL </option>
                    </select>
                </div>
                
                <div className="area-var-padrao">
                    <label> Variação Padrão? </label>
                    <br></br>
                    <select className="var-padrao"> 
                    <option> Variação 1 </option>
                    <option> Variação 2 </option>
                    <option> Variação 3 </option>
                    <option> Variação 4 </option>
                    </select>
                </div>
                
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
                <label> Descrição </label>
                <br></br>
                    <textarea cols="33" rows="6"></textarea>
               </div>
               <button type="submit"> Criar </button>
            </form>
        </div>
    )
}
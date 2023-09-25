import React, {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cabecalho from '../components/Cabecalho'
import '../styles/NovoIngrediente.css'
import { CategoriasDeIngredientes, OpcoesDeMedidas, OpcoesDeVariacao } from '../listas'
import img from "../../src/images/quadrado-vinho.jpg"
import { FetchScript as fs } from '../scripts/fetchScripts'

export default function App(){

   let navigate = useNavigate();
   const [opcoesSubstitutos, setOpcoesSubstitutosSubstitutos] = useState([]);

   const [id, setId] = useState();
   const [nome, setnome] = useState("");
   const [categoriaPrincipal, setcategoriaPrincipal] = useState(null);
   const [outrasCategorias, setOutrasCategorias] = useState("");
   const [medida, setmedida] = useState(null);
   const [qtd, setqtd] = useState(0);
   const [variacao, setvariacao] = useState(0);
   const [substitutos, setSubstitutos] = useState([]);
   const [descricao, setdescricao] = useState("");

   useEffect(() => {
      fs.getApiData("ingredientes").then(value => {
         setOpcoesSubstitutosSubstitutos(value);
         setId(value.length);
      })
   }, []);

   return (
      <div>
             <Cabecalho 
               titulo='Novo Ingrediente'
               fundo='escuro'
            ></Cabecalho>
            <div id="container" className="Container">
            
            <div>
                <div className="area-img">
                    <img src={img} className="quadrado" alt="imagem-ingrediente"/>
                </div>
         <h5>{nome} | {categoriaPrincipal} | {id} | {substitutos['nome']} | {descricao} </h5>
            
                <div className="area-nome">
                    <label> Nome </label>
                    <br></br>
                    <input placeholder="Nome" type="text" id="criar-nome-ing" onChange={(e) => setnome(e.target.value)}/>
                </div>
                
                <div className="area-categoria">
                    <label> Categoria Principal </label>
                    <br></br>
                    <select className="categoria" onChange={(e) => setcategoriaPrincipal(e.target.value)}> 
                    <option disabled selected value hidden="true">Categorias</option>
                    {
                     CategoriasDeIngredientes.map((cat) => (
                        <option value={cat}>{cat}</option>
                     ))
                    }
                </select>
                
            </div>
        
                <div className="area-medidas">
                    <label> Medidas </label>
                    <br></br>
                    <select className="medida" onChange={(e) => setmedida(e.target.value)}> 
                    <option disabled selected value hidden="true">Medidas</option>
                    {
                     OpcoesDeMedidas.map((med) => (
                        <option value={med}>{med}</option>
                     ))
                    }
                    </select>
                </div>
                
                <div className="area-var-padrao">
                    <label> Variação Padrão </label>
                    <br></br>
                    <select className="var-padrao" onChange={(e) => setvariacao(e.target.value)}> 
                    <option disabled selected value hidden="true">Variações</option>
                    {
                     OpcoesDeVariacao.map((vari) => (
                        <option value={vari*1}>{vari}</option>
                     ))
                    }
                    </select>
                </div>
            
            
                <div className="area-outras-categorias">
                    <label> Outras Categorias </label>
                    <br></br>
                    <select className="outras-categorias" onChange={(e) => setOutrasCategorias(e.target.value)}> 
                    <option selected value={null}>Categorias</option>
                    {
                     CategoriasDeIngredientes.map((cat) => (
                        <option value={cat}>{cat}</option>
                     ))
                    }
                </select>
                </div>
                
            <div className="area-substitutos">
                <label> Substitutos </label>
                <br></br>
                    <select className="substitutos" onChange={(e) => {setSubstitutos(JSON.parse(e.target.value)); console.log(e.target.value)}}> 
                    <option selected value={[]}>Ingredientes Substitutos</option>
                    {
                     opcoesSubstitutos.map((sub) => (
                        <option value={JSON.stringify(sub)}>{sub.nome}</option>
                     ))
                    }
                    </select>
            </div>
                
            <div className="area-descricao">
                <label> Descrição </label>
                <br></br>
                    <textarea cols="33" rows="6" onChange={(e) => setdescricao(e.target.value)}></textarea>
            </div>
            
                    <button className="botao" onClick={handleNovoIngrediente}> Criar </button>

            </div>
        </div>
      </div>
   )
   
   function handleNovoIngrediente() {
      if (nome === "" || 
         categoriaPrincipal === null ||
         medida === null ||
         variacao === 0
         ) {
         return console.log("Preencha os campos!");
      }
      let requestBody = JSON.stringify({
         id,
         nome,
         categoriaPrincipal,
         outrasCategorias,
         medida,
         "qtd": qtd,
         "variacao": parseFloat(variacao),
         substitutos,
         descricao,
      })
      console.log(requestBody);

      fs.postApiData("ingredientes", requestBody);
      setTimeout(() => {
         navigate("/estoque/");
      }, 150);
   }
}
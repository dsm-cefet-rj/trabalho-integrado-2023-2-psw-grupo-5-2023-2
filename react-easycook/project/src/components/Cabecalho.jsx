import React from "react"
import seta from "../../src/images/icone-seta-branca.png"
import tresPontos from "../../src/images/3pontos.png"
import homeButton from "../../src/images/icone-casa.png"
import filtroTotal from "../../src/images/icone-filtro.png"
import favoritoButton from "../../src/images/menu-favorito.png"
import "../../src/styles/cabecalho.css"
import { Link, useNavigate} from "react-router-dom"
import {useState} from 'react'

import nomeFiltro from '../images/filtro-pesquisa.png'
import ingredienteFiltro from '../images/filtro-ingrediente.png'
import AZFiltro from '../images/filtro-a-z.png'
import ZAFiltro from '../images/filtro-z-a.png'
import categoriaFiltro from '../images/filtro-categoria.png'

export default function Cabecalho({titulo, fundo = 'claro', outros, filtro, home, favorito, cancelar, salvar}) {
  
  let [popup, setPopup] = useState(true);

  const navigate = useNavigate();
  const goBack = () => {
      navigate(-1);
  }
  function popupConsultaIngrediente(){
      var popup = document.getElementById('popup-3-pontos')
      popup.style.visibility = 'visible'
    }
  function excluir(){
      var popup = document.getElementById('popup-3-pontos')
      popup.style.visibility = 'hidden'
  }
  function filtroEstoque(){
      var filtro = document.getElementById('filtro-estoque')
      filtro.style.visibility = 'visible'
  }

    return (
      <div className={`Cabecalho ${fundo}`}>
          <div className="leftSide">
              <button onClick={goBack} className="nada">
                  <img src={seta} className="icone-seta-branca" alt="icone-seta-branca"/>
              </button>
              <h2 className="titulo">{titulo}</h2>
              
          </div>
          <div className="rightSide">
              <img src={tresPontos} hidden={!outros} alt="icone-tres-pontos" className="icone-tres-pontos"  onClick={popupConsultaIngrediente}/>
              <img src={favoritoButton} hidden={!favorito} alt="icone-favoritar" className="icone-favoritar"/>
              
              <img src={filtroTotal} hidden={!filtro} alt="icone-filtro" className="icone-filtro" onClick={e => setPopup(!popup)}/>
          
              <Link to="/" hidden={!home}>
                  <img src={homeButton} hidden={!home} alt="icone-home" className="icone-home"/>
              </Link>
              <div id="popup-3-pontos">
                  <Link to='/editar-ingrediente'><h3 className="vermelho">Editar</h3></Link>
                  <h3 className="preto excluir" onClick={excluir}>Excluir</h3>
              </div>
              <div id="edicao">
                <Link to="/detalhes-ingrediente/:id" hidden={!salvar} className="salvar"><a href="localhost:3000/">Salvar</a></Link>
                <Link to="/detalhes-ingrediente/:id" hidden={!cancelar} className="cancelar"><a href="localhost:3000/">Cancelar</a></Link>
              </div>   
      <div id="filtro-estoque">
        <div id="txt-filtro">
          <h3 className="preto" onclick="">Filtrar por</h3>
        </div>
          <div className="filtrar-nome">
            <img src={nomeFiltro} className="imagem-filtro-pesquisa" onclick=""/>
            <input className="cinza input-nome-filtro" placeholder="Nome"/>
          </div>
        
        
          <div className="filtrar-ingrediente">
            <img src={ingredienteFiltro} className="imagem-filtro-ingrediente" onclick=""/>
            <select className="cinza select-ingrediente" onclick="">
              <option>Ingrediente 1</option>
              <option>Ingrediente 2</option>
              <option>Ingrediente 3</option>
            </select>
          </div>
        
          <div className="filtrar-a-z">
            <img src={AZFiltro} className="imagem-filtro-a-z" onclick=""/>
            <h3 className="cinza" onclick="">Ordem Alfabética</h3>
          </div>
        
          <div className="filtrar-z-a">
            <img src={ZAFiltro} className="imagem-filtro-z-a" onclick=""/>
            <h3 className="cinza" onclick="">Ordem Contrária</h3>
          </div>
        
          <div className="filtrar-categoria">
            <img src={categoriaFiltro} className="imagem-filtro-categoria" onclick=""/>
            <select className="cinza select-categoria" onclick="">
              <option>Categoria 1</option>
              <option>Categoria 2</option>
              <option>Categoria 3</option>
            </select>
          </div>
        </div>
      </div>
  </div>     
  )

    
}

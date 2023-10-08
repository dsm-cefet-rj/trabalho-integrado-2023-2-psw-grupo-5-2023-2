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
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
                  {/* <img src={seta} className="icone-seta-branca" alt="icone-seta-branca"/> */}
                  
              </button>
              
              <h2 className="titulo">{titulo}</h2>
              
          </div>
          <div className="rightSide">
              <svg xmlns="http://www.w3.org/2000/svg" hidden={!outros} width="50" height="50" fill="#ff2b2b" class="bi bi-three-dots-vertical icone-tres-pontos" viewBox="0 0 16 16" onClick={popupConsultaIngrediente}>
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              </svg>         

              <svg xmlns="http://www.w3.org/2000/svg" hidden={!favorito} width="50" height="50" fill="#ff2b2b" className="bi bi-bookmark-star-fill icone-favoritar" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"/>
              </svg>
          
              <svg xmlns="http://www.w3.org/2000/svg" hidden={!filtro} width="50" height="50" fill="#ff2b2b" className="bi bi-funnel-fill icone-filtro" viewBox="0 0 16 16" onClick={e => setPopup(!popup)}>
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
              </svg>
              
              
              <Link to="/" hidden={!home} class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Página Inicial">
                <svg xmlns="http://www.w3.org/2000/svg" hidden={!home} width="50" height="50" fill="#ff2b2b" className="icone-home bi bi-house-fill" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                </svg>
                  
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

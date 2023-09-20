import React from "react"
import seta from "../../src/images/icone-seta-branca.png"
import tresPontos from "../../src/images/3pontos.png"
import filtroAZ from "../../src/images/filtro-a-z.png"
import homeButton from "../../src/images/icone-casa.png"
import favoritoButton from "../../src/images/menu-favorito.png"
import "../../src/styles/cabecalho.css"
import { Link, useNavigate } from "react-router-dom"

export default function Cabecalho({titulo, outros, filtro, home, favorito}) {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className='Cabecalho'>
            <div className="leftSide">
                <button onClick={goBack} className="nada">
                    <img src={seta} className="icone-seta-branca" alt="icone-seta-branca"/>
                </button>
                <h2 className="titulo">{titulo}</h2>
            </div>
            <div className="rightSide">
                <img src={tresPontos} hidden={!outros} alt="icone-seta-branca"/>
                <img src={favoritoButton} hidden={!favorito} alt="icone-seta-branca"/>
                <img src={filtroAZ} hidden={!filtro} alt="icone-seta-branca"/>
                <Link to="/" hidden={!home}>
                    <img src={homeButton} hidden={!home} alt="icone-seta-branca"/>
                </Link>
                
            </div>

            
            
        </div>
    )

    
}

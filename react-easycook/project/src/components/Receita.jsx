import { useState } from "react";
import '../styles/ingrediente.css';
import '../styles/receita.css';
import { Link } from "react-router-dom";

export default function Receita({nome, categoriaPrincipal, idReceita, descricao, ingredientes}) {
    
    function popupDetalhesExcluir(){
        var popup = document.getElementById('popup-detalhes-excluir')
        popup.style.visibility = 'visible'
    }
    function excluir(){
        var popup = document.getElementById('popup-detalhes-excluir')
        popup.style.visibility = 'hidden'
    }
    const tmp = ">";
    return(
        <div id="receita" className="componente">
            <label id="nome">{nome}</label>
            <label id="descricao">{descricao}</label>

            
            <div className="buttons">
                
                <button onClick={popupDetalhesExcluir}>{tmp}</button>
            </div>
            <div id="popup-detalhes-excluir">
                  <Link to='/detalhes-ingrediente'><h3 className="cinza">Detalhes</h3></Link>
                  <h3 className="vermelho" onClick={excluir}>Remover</h3>
            </div>
        </div>
    )
}
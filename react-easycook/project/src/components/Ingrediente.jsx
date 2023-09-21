import { useState } from "react";
import '../styles/ingrediente.css';
import { Link } from "react-router-dom"

export default function Ingrediente({nome = '', qtd = 0, categoriaPrincipal = '', medida = 'Un', variacao = 0, descricao = ''}) {
    
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
        <div id="ingrediente" className="componente">
            <label id="nome">{nome}</label>
            <label id="qtd">{qtd}</label>
            <label id="medida">{medida}</label>
            <div className="buttons">
                <button>+</button>
                <button>-</button>
                <div>
                    <button onClick={popupDetalhesExcluir}>{tmp}</button>
                </div>
                
            </div>
            <div id="popup-detalhes-excluir">
                  <Link to='/detalhes-ingrediente'><h3 className="cinza">Detalhes</h3></Link>
                  <h3 className="vermelho" onClick={excluir}>Remover</h3>
              </div>
        </div>
    )
}
import { useState } from "react";
import '../styles/ingrediente.css';
import '../styles/receita.css';
import { Link } from "react-router-dom";

export default function Receita({nome, categoriaPrincipal, id, descricao, ingredientes}) {
    
    var [popup, setPopup] = useState(true);
    const tmp = ">";
    return(
        <div id="receita" className="componente">
            <label id="nome">{nome}</label>
            <label id="descricao">{descricao}</label>

            
            <div className="buttons">
                
                <button onClick={e => setPopup(!popup)}>{tmp}</button>
            </div>
            <div id="popup-detalhes-excluir" hidden={popup}>
                  <Link to={`/detalhes-receita/${id}`}><h3 className="cinza">Detalhes</h3></Link>
                  <h3 className="vermelho" onClick={e => setPopup(!popup)}>Remover</h3>
            </div>
        </div>
    )
}
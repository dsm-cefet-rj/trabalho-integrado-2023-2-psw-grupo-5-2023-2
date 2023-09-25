import { useState } from "react";
import '../styles/ingrediente.css';
import '../styles/receita.css';
import { Link } from "react-router-dom";
import '../styles/compras.css';


export default function ListaCompras({nome, id, ingredientes}) {
    
    var [popup, setPopup] = useState(true);
    const tmp = ">";
    return(
        <div id="compras" className="componente">
            <label id="nome">{nome}</label>
            <label id="nome">{id}</label>
            {
                ingredientes.map((ing) => (
                    <label>{ing.nome}</label>
                    ))
            }
            
            <div className="buttons">
                
                <button onClick={e => setPopup(!popup)}>{tmp}</button>
            </div>
            <div id="popup-detalhes-excluir" hidden={popup}>
                  <Link to={`/detalhes-lista-compras/${id}`}><h3 className="cinza">Detalhes</h3></Link>
                  <h3 className="vermelho" onClick={e => setPopup(!popup)}>Remover</h3>
            </div>
        </div>
    )
}
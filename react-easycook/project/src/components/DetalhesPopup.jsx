import { useState } from "react";
import '../styles/ingrediente.css';
import '../styles/receita.css';
import { Link } from "react-router-dom";

export default function DetalhesPopup({id, tipoObjeto}) {
    
    var [popup, setPopup] = useState(true);

    return(
        <div id="receita" className="btn btn-primary">
            <label id="nome">{nome}</label>
            <label id="descricao">{descricao}</label>
            <div className="buttons">
                <button onClick={e => setPopup(!popup)}>...</button>
            </div>
            <div id="popup-detalhes-excluir" hidden={popup}>
                  <Link to={`/${tipoObjeto}/${id}`}><h3 className="cinza">Detalhes</h3></Link>
                  <h3 className="vermelho" onClick={HandleRemoveReceitaClick}>Remover</h3>
                  <h3 className="favoritar" onClick=''>Favoritar</h3>
            </div>
        </div>
    )
}
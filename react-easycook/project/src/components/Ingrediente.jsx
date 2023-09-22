import { useState } from "react";
import '../styles/ingrediente.css';
import { Link, Navigate, useNavigate } from "react-router-dom"

export default function Ingrediente({nome = '', qtd = 0, categoriaPrincipal = '', medida = 'Un', variacao = 0, descricao = '', id}) {
    
    let [popup, setPopup] = useState(true);
    
    const tmp = ">";
    return(
    <div id="ingrediente" className="componente">
            <label id="id">{id}</label>
            <label id="nome">{nome}</label>
            <label id="qtd">{qtd}</label>
            <label id="medida">{medida}</label>
            <div className="buttons">
                <button>+</button>
                <button>-</button>
                <div>
                    <button onClick={e => setPopup(!popup)}>{tmp}</button>
                    <div className="popup-detalhes-excluir" hidden={popup}>
                        <Link to={`/detalhes-ingrediente/${id}`}>
                            <h3 className="cinza">Detalhes</h3>
                        </Link>
                        <h3 className="vermelho" onClick={e => setPopup(!popup)}>Remover</h3>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
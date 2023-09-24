import React, { useEffect } from "react";
import { useState } from "react";
import '../styles/ingrediente.css';
import { Link, Navigate, useNavigate, useBeforeUnload } from "react-router-dom"

export default function Ingrediente({
    nome = '',
    qtd = 0,
    categoriaPrincipal = '',
    medida = 'Un',
    variacao = 0,
    descricao = '',
    id, 
    atualizarQtdDB,
}){
    
    var [popup, setPopup] = useState(true);
    var [nome, setNome] = useState(nome);
    var [qtd, setQtd] = useState(qtd);
    var [categoriaPrincipal, setCategoriaPrincipal] = useState(categoriaPrincipal);
    var [medida, setMedida] = useState(medida);
    var [variacao, setVariacao] = useState(variacao);
    var [descricao, setDescricao] = useState(descricao);
    var [id, setId] = useState(id);

    const tmp = ">";
    return(
    <div id="ingrediente" className="componente">
            <label id="id">{id}</label>
            <label id="nome">{nome}</label>
            <label id="qtd">{qtd}</label>
            <label id="medida">{medida}</label>
            <div className="buttons">
                <button onClick={() => {setQtd(qtd + variacao); atualizarQtdDB(id, qtd)}}>+</button>
                <button onClick={() => {if (qtd > (variacao - 1)) {setQtd(qtd - variacao); atualizarQtdDB(id, qtd)}}}>-</button>
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
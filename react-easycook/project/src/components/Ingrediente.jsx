import React, { useEffect } from "react";
import { useState } from "react";
import '../styles/ingrediente.css';
import { Link, useNavigate } from "react-router-dom"

export default function Ingrediente({
    nome = '',
    qtd = 0,
    categoriaPrincipal = '',
    medida = 'Un',
    variacao = 0,
    descricao = '',
    id, 
    atualizarQtdDB,
    refreshPageWithKey,
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

    let navigate = useNavigate();

    const removeIngrediente = async () => {
        const apiUrl = `http://localhost:3002/ingredientes/${id}`;
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await fetch(apiUrl, requestOptions);
            if (response.ok) {
                console.log(`Ingrediente com ID ${id} removido com sucesso.`);
                // Adicione aqui qualquer ação que você deseja executar após a remoção
            } else {
                console.error(`Erro ao remover o ingrediente com ID ${id}.`);
            }
        } catch (error) {
            console.error(`Erro na solicitação DELETE: ${error}`);
        }
    };
    const handleRemoveClick = () =>{
        removeIngrediente(id);
        setTimeout(() => {
            refreshPageWithKey(id);
        }, 100);
    }
    return(
    <div id="ingrediente" className="componente">
            <label id="id">{id}</label>
            <label id="nome">{nome}</label>
            <label id="qtd">{qtd}</label>
            <label id="medida">{medida}</label>
            <div className="buttons">
                <button onClick={() => {atualizarQtdDB(id, Number(qtd+variacao)); setQtd(qtd + variacao)}}>+</button>
                <button onClick={() => {if (qtd > (variacao - 1)) {atualizarQtdDB(id, qtd-variacao); setQtd(qtd - variacao)}}}>-</button>
                <div>
                    <button onClick={e => setPopup(!popup)}>{tmp}</button>
                    <div className="popup-detalhes-excluir" hidden={popup}>
                        <Link to={`/detalhes-ingrediente/${id}`}>
                            <h3 className="cinza">Detalhes</h3>
                        </Link>
                        <h3 className="vermelho" onClick={handleRemoveClick}>Remover</h3>
                    </div>
                </div>
            </div>
            
        </div>
    )

    
}
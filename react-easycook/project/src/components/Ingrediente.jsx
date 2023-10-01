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
    const handleRemoveIngredienteClick = () =>{
        removeIngrediente(id);
        setTimeout(() => {
            refreshPageWithKey(id);
        }, 100);
    }
    return(
        <div className="row w-100 align-items-center text-center border-bottom mt-3 py-3" >
            <div className="col-9 d-flex">
                <label id="id" className="col-1 my-auto">{id}</label>
                <label id="nome" className="col-2 my-auto">{nome}</label>
                <p id="descricao" className="col-5 text-start my-auto">{descricao} </p>
                <label id="categoriaPrincipal" className="col-1 my-auto">{categoriaPrincipal}</label>
                <label id="qtd" className="col-2 my-auto">{qtd}</label>
                <label id="medida" className="col-1 my-auto">{medida}</label>
            </div>
            <div className="col-3">
                <div className="row d-flex justify-content-center">
                    <button className="col-3 mx-1 btn btn-primary" onClick={() => {atualizarQtdDB(id, Number(qtd+variacao)); setQtd(qtd + variacao)}}>+</button>
                    <button className="col-3 mx-1 btn btn-primary" onClick={() => {if (qtd > (variacao - 1)) {atualizarQtdDB(id, qtd-variacao); setQtd(qtd - variacao)}}}>-</button>
                    <button className="col-3 mx-1 btn btn-primary" onClick={e => setPopup(!popup)}>{tmp}</button>
                </div>
            </div>
            
                    <div className="popup-detalhes-excluir" hidden={popup}>
                        <Link to={`/detalhes-ingrediente/${id}`}>
                            <h3 className="cinza">Detalhes</h3>
                        </Link>
                        <h3 className="vermelho excluir" onClick={handleRemoveIngredienteClick}>Remover</h3>
                    </div>
                </div>
    )

    
}
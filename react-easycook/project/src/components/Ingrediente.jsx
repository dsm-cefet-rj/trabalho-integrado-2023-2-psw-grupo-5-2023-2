import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import DetalhesPopup from "./DetalhesPopup";

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
        <div className="row w-100 align-items-center text-center border-bottom mt-3 py-3">

            <div className="col-md-9 col-12 d-flex mb-4 mb-md-0 flex-wrap">
                <label id="id" className="col-1 col-md-1 my-auto">{id}</label>
                <label id="nome" className="col-5 col-md-2 my-auto">{nome}</label>
                <label id="categoriaPrincipal" className="col-5 col-md-2 my-auto">{categoriaPrincipal}</label>
                <p id="descricao" className="col-12 col-md-4 text-center text-md-start my-4 ps-3 my-md-auto">{descricao} </p>
                <label id="qtd" className="col-6 col-md-2 my-auto text-end text-md-center">{qtd}</label>
                <label id="medida" className="col-6 col-md-1 my-auto text-start text-md-center">{medida}</label>
            </div>

            <div className="col-12 col-md-3">
                <div className="row d-flex justify-content-center">
                    <button className="col-3 mx-1 btn btn-primary" onClick={() => {atualizarQtdDB(id, Number(qtd+variacao)); setQtd(qtd + variacao)}}>+</button>
                    <button className="col-3 mx-1 btn btn-primary" onClick={() => {if (qtd > (variacao - 1)) {atualizarQtdDB(id, qtd-variacao); setQtd(qtd - variacao)}}}>-</button>
                    <DetalhesPopup 
                        id={id}
                        favoritavel={true}
                        removeObjeto={handleRemoveIngredienteClick}
                        favoritaObjeto={""}
                        rotaConsulta={"detalhes-ingrediente"} 
                        ></DetalhesPopup>
                </div>
            </div>
        </div>
    )

    
}
import React, { useEffect, useState } from "react";
import '../styles/listas.css'
import { Link } from "react-router-dom"
import ListaDeCompras from "../pages/ListasDeCompras";
import ListaCompras from "./ListasCompras";
import Ingrediente from './Ingrediente'
import Receita from "./Receita";

export function Lista({
    tipoObjeto, 
    rotaNovoObj, 
    nomeObjetos, 
    objetos, 
    atualizarQtdDB,
    refreshPageWithKey
}) {
     
    return (
        <div id="listas" className="min-vh-100">
            <Link to={rotaNovoObj}>
                <button id="novo-objeto">{nomeObjetos}</button>
            </Link>
            {escolheElemento()}
        </div>
    )


    function escolheElemento() {
        if (tipoObjeto === "ingrediente") {
            return (
                objetos.map((obj) => (
                    <Ingrediente
                    nome={obj.nome}
                    qtd={obj.qtd}
                    variacao={obj.variacao}
                    medida={obj.medida}
                    id={obj.id}
                    atualizarQtdDB={atualizarQtdDB}
                    refreshPageWithKey={refreshPageWithKey}
                    ></Ingrediente>
                ))
            );
        }
        if (tipoObjeto === "receita") {
            return (
                objetos.map((obj) => (
                    <Receita
                    nome={obj.nome}
                    categoriaPrincipal={obj.categoriaPrincipal}
                    id={obj.id}
                    descricao={obj.descricao}
                    ingredientes={obj.ingredientes}
                    ></Receita>
                ))
            );
        }
        if (tipoObjeto === "listaDeCompras") {
            return (
                objetos.map((obj) => (
                    <ListaCompras
                    nome={obj.nome}
                    id={obj.id}
                    ingredientes={obj.ingredientes}
                    ></ListaCompras>
                ))
            );
        }
    }
}
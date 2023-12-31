import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListaDeCompras from "../../../pages/compras/ListasDeCompras";
import ListaCompras from "./ListasCompras";
import Ingrediente from "./Ingrediente";
import Receita from "./Receita";
import "../../../styles/listas.css";

export function Lista({
  tipoObjeto,
  rotaNovoObj,
  nomeObjetos,
  objetos,
  atualizarQtdDB,
  refreshPageWithKey,
}) {
  return (
    <div
      id="listas"
      className="container-fluid border-black border-black min-vh-100 my-0 bg-azure"
    >
      <Link to={rotaNovoObj}>
        <button className="novo-objeto">{nomeObjetos}</button>
      </Link>
      {escolheElemento()}
    </div>
  );

  function escolheElemento() {
    console.log(`Objetos: ${JSON.stringify(objetos)}`);
    if (tipoObjeto === "ingrediente") {
      return objetos?.map((obj) => (
        <Ingrediente
          nome={obj.nome}
          qtd={obj.qtd}
          variacao={obj.variacao}
          categoriaPrincipal={obj.categoriaPrincipal}
          medida={obj.medida}
          descricao={obj.descricao}
          id={obj._id}
          atualizarQtdDB={atualizarQtdDB}
          refreshPageWithKey={refreshPageWithKey}
        ></Ingrediente>
      ));
    }
    if (tipoObjeto === "receita") {
      return objetos?.map((obj) => (
        <Receita
          nome={obj.nome}
          categoriaPrincipal={obj.categoriaPrincipal}
          id={obj._id}
          descricao={obj.descricao}
          ingredientes={obj.ingredientes}
        ></Receita>
      ));
    }
    if (tipoObjeto === "listaDeCompras") {
      return objetos?.map((obj) => (
        <ListaCompras
          nome={obj.nome}
          id={obj.id}
          ingredientes={obj.ingredientes}
        ></ListaCompras>
      ));
    }
    if (tipoObjeto === "ingredienteCompras") {
      return objetos?.map((obj) => (
        <Ingrediente
          nome={obj.ingrediente.nome}
          qtd={obj.qtd}
          variacao={obj.ingrediente.variacao}
          categoriaPrincipal={obj.ingrediente.categoriaPrincipal}
          medida={obj.ingrediente.medida}
          descricao={obj.ingrediente.descricao}
          id={obj.id}
          atualizarQtdDB={atualizarQtdDB}
          refreshPageWithKey={refreshPageWithKey}
        ></Ingrediente>
      ));
    }
  }
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListaCompras from "../../components/compartilhados/listas/ListasCompras";
import "../../styles/listas.css";

export default function ListasListasDeCompras({
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
    return objetos?.map((obj) => (
      <ListaCompras
        nome={obj.nome}
        id={obj.id}
        ingredientes={obj.ingredientes}
      ></ListaCompras>
    ));
  }
}

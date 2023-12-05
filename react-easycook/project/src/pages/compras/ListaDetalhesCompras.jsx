import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ingrediente from "../../components/compartilhados/listas/Ingrediente";
import ListaCompras from "../../components/compartilhados/listas/ListasCompras";
import "../../styles/listas.css";

export default function ListasListasDeCompras({
  tipoObjeto,
  rotaNovoObj,
  nomeObjetos,
  objetos,
  atualizarQtdDB,
  refreshPageWithKey,
  idLista,
}) {
  return (
    <div
      id="listas"
      className="container-fluid border-black border-black min-vh-100 my-0 bg-azure"
    >
      <Link to={rotaNovoObj + idLista}>
        <button className="novo-objeto">{nomeObjetos}</button>
      </Link>
      {escolheElemento()}
    </div>
  );

  function escolheElemento() {
    console.log(objetos);
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

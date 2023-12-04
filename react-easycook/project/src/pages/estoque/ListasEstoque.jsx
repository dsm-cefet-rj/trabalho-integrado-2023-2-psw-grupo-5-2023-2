import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ingrediente from "../../components/compartilhados/listas/Ingrediente";

export function ListaEstoque({
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
      <div className="row">
        <div className="col px-0">
          <Link to={rotaNovoObj}>
            <button className="novo-objeto">{nomeObjetos}</button>
          </Link>
        </div>
        <div className="col px-0">
          <Link to={"/editar-estoque"}>
            <button className="novo-objeto">{"Editar Estoque"}</button>
          </Link>
        </div>
      </div>

      {escolheElemento()}
    </div>
  );

  function escolheElemento() {
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
}

import React from "react";
import Cabecalho from "../../components/compartilhados/Cabecalho";
import BodyNovaPagina from "./BodyNovaReceita";

export default function NovaListaDeCompras() {
  return (
    <div>
      <Cabecalho titulo="Nova Receita" fundo="escuro"></Cabecalho>
      <BodyNovaPagina></BodyNovaPagina>
    </div>
  );
}

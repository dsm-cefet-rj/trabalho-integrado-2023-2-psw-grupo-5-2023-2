import React, { useEffect, useState } from "react";
import Ingrediente from "../../components/compartilhados/listas/Ingrediente";
import Cabecalho from "../../components/compartilhados/Cabecalho";
import { Lista } from "../../components/compartilhados/listas/Listas";
import Rodape from "../../components/compartilhados/Rodape";
import Compras from "../../components/compartilhados/listas/ListasCompras";
import { FetchScript } from "../../scripts/ApiBackend";
import authService from "../../auth/auth.service";

export default function ListaDeCompras() {
  const [listasDeCompras, setListasDeCompras] = useState([]);

  useEffect(() => {
    FetchScript.listAllData(
      FetchScript.RequestPaths.listas +
        "user/" +
        authService.getCurrentUser().id
    ).then((response) => {
      setListasDeCompras(response);
    });
  }, []);

  return (
    <div className="container-fluid p-0">
      <div>
        <Cabecalho titulo="Listas de Compras" home filtro></Cabecalho>
      </div>
      <div id="">
        <div className="">
          <Lista
            nomeObjetos="Nova Lista de Compras"
            rotaNovoObj="/nova-lista-de-compras"
            objetos={listasDeCompras}
            tipoObjeto={"listaDeCompras"}
          ></Lista>
        </div>
      </div>
      <Rodape></Rodape>
    </div>
  );
}

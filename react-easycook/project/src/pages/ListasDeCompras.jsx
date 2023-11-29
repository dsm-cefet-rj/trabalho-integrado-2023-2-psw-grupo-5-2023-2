import React, { useEffect, useState } from "react";
import Ingrediente from "../components/Ingrediente";
import Cabecalho from "../components/Cabecalho";
import { Lista } from "../components/Listas";
import Rodape from "../components/Rodape";
import Compras from "../components/ListasCompras";
import { FetchScript } from "../scripts/ApiBackend";

export default function ListaDeCompras() {
  const [listasDeCompras, setListasDeCompras] = useState([]);

  useEffect(() => {
    FetchScript.listAllData(FetchScript.RequestPaths.listas).then((response) => {

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

import React, { useEffect, useState } from "react";
import Ingrediente from "../components/Ingrediente";
import Cabecalho from "../components/Cabecalho";
import { Lista } from "../components/Listas";
import Rodape from "../components/Rodape";
import Compras from "../components/ListasCompras";

export default function ListaDeCompras() {
  const [listasDeCompras, setListasDeCompras] = useState([]);

  const getApiData = async () => {
    const response = await fetch("/lista")
      .then((response) => response.json())
      .then((res) => setListasDeCompras(res))
      .catch(console.log);
  };

  useEffect(() => {
    getApiData();
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

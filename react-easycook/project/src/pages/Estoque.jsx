import React, { useEffect, useState } from "react";
import Rodape from "../components/Rodape";
import Cabecalho from "../components/Cabecalho";
import { Lista } from "../components/Listas";
import { FetchScript } from "../scripts/ApiBackend";

export default function Estoque() {
  const [ingredientes, setIngredientes] = useState([]);

  const atualizarQtdDB = async (ingredienteId, novaQtd) => {
    FetchScript.patchApiData(FetchScript.RequestPaths.ingredientes, ingredienteId, JSON.stringify({ qtd: novaQtd }));
  };

  useEffect(() => {
    FetchScript.listAllData(FetchScript.RequestPaths.ingredientes).then((response) => {

      setIngredientes(response);
    });
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="">
        <Cabecalho titulo="Estoque" home filtro></Cabecalho>
      </div>
      <div id="estoque">
        <div className="">
          <Lista
            rotaNovoObj="/novo-ingrediente"
            nomeObjetos="Novo Ingrediente"
            objetos={ingredientes}
            tipoObjeto="ingrediente"
            atualizarQtdDB={atualizarQtdDB}
          />
        </div>
      </div>
      <Rodape></Rodape>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "../../styles/estoque.css";
import Rodape from "../../components/compartilhados/Rodape";
import Ingrediente from "../../components/compartilhados/listas/Ingrediente";
import Cabecalho from "../../components/compartilhados/Cabecalho";
import { Lista } from "../../components/compartilhados/listas/Listas";
import { useParams } from "react-router-dom";
import { FetchScript } from "../../scripts/ApiBackend";

export default function DetalhesCompras() {
  const [ingredientes, setIngredientes] = useState([]);

  const { id } = useParams();

  const [lista, setLista] = useState([]);

  const getApiData = async () => {
    const response = await fetch("http://localhost:3001/lista/" + id)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setLista(res);
        setIngredientes(res["ingredientes"]);
      })
      .catch(console.log);
  };

  useEffect(() => {
    FetchScript.getDataById(FetchScript.RequestPaths.listas, id).then((response) => {
      console.log(response);
      setLista(response);
      setIngredientes(response["ingredientes"]);
    })
  }, []);

  const atualizarQtdDB = async (ingredienteId, novaQtd) => {
    let body = JSON.stringify({ qtd: novaQtd });
    FetchScript.patchApiData(FetchScript.RequestPaths.monitoracao, ingredienteId, body);
  };

  return (
    <div>
      <div>
        <Cabecalho titulo="Lista" home filtro></Cabecalho>
      </div>
      <div id="lista-compras">
        <div className="lista-ingredientes">
          <Lista
            rotaNovoObj="/novo-ingrediente"
            nomeObjetos="Novo Ingrediente"
            objetos={ingredientes}
            tipoObjeto="ingredienteCompras"
            atualizarQtdDB={atualizarQtdDB}
          ></Lista>
          <div className="listas"></div>

          <Rodape></Rodape>
        </div>
      </div>
    </div>
  );
}

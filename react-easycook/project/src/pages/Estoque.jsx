import React, { useEffect, useState } from "react";
import Rodape from "../components/Rodape";
import Ingrediente from "../components/Ingrediente";
import Cabecalho from "../components/Cabecalho";
import { Lista } from "../components/Listas";

export default function Estoque() {
  const [ingredientes, setIngredientes] = useState([]);

  const getApiData = async () => {
    const response = await fetch("ingrediente")
      .then((response) => response.json())
      .then((data) => setIngredientes(data))
      .catch(console.log);
  };

  const atualizarQtdDB = async (ingredienteId, novaQtd) => {
    try {
      const result = await fetch(`ingrediente/${ingredienteId}`, {
        method: "PATCH",
        body: JSON.stringify({ qtd: novaQtd }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.ok) {
        console.log("Quantidade atualizada com sucesso no banco de dados.");
      } else {
        console.error("Falha ao atualizar a quantidade no banco de dados.");
      }
    } catch (error) {
      console.error("Erro ao atualizar a quantidade no banco de dados:", error);
    }
  };

  useEffect(() => {
    getApiData();
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
          ></Lista>
        </div>
      </div>
      <Rodape></Rodape>
    </div>
  );
}

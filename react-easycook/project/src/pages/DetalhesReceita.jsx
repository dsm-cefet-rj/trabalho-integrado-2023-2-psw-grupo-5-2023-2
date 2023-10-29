import React, { useState, useEffect } from "react";
import Cabecalho from "../components/Cabecalho";
import img from "../images/quadrado-vinho.jpg";
import "../styles/detalhesIngrediente.css";
import { useParams } from "react-router-dom";
import { FetchScript } from "../scripts/ApiBackend";

export default function DetalhesReceita() {
  const { id } = useParams();

  const [receita, setReceita] = useState([]);

  useEffect(() => {
    FetchScript.getDataById(FetchScript.RequestPaths.receitas, id)
    .then((response) => setReceita(response));
  }, []);

  return (
    <div>
      <Cabecalho titulo="Detalhes"></Cabecalho>
      <div className="corpo">
        <img src={img} className="imagem-quadrado" alt="img-igrediente" />
        <h1>
          {receita.nome}
        </h1>
        <span> Categoria </span>

        <p> {receita.categoriaPrincipal} </p>
        <span> Ingredientes </span>

        <ul class="ingsReceita">
          {receita["ingredientes"]?.map((ing) => (
            <li>{ing.nome}</li>
          ))}
        </ul>

        <span> Modo de Preparo </span>
        <label class="preparo"> {receita.descricao} </label>
      </div>
    </div>
  );
}

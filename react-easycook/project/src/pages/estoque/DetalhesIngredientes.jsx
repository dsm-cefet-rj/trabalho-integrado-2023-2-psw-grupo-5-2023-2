import React, { useEffect, useState } from "react";
import Cabecalho from "../../components/compartilhados/Cabecalho";
import "../../styles/detalhesIngrediente.css";
import img from "../../images/quadrado-vinho.jpg";
import { useParams } from "react-router-dom";
import { FetchScript } from "../../scripts/ApiBackend";
import { Link } from "react-router-dom";

export default function DetalhesIngrediente() {
  const { id } = useParams();

  

  const [ingrediente, setingrediente] = useState([]);

  useEffect(() => {
  FetchScript.getDataById(FetchScript.RequestPaths.ingredientes, id)
    .then((response) => setingrediente(response));
  }, []);

  return (
    <div className="DetalhesIngrediente">
      <Cabecalho titulo="Detalhes" fundo="claro" outros home />
      <div className="corpo">
        <img src={img} className="imagem-quadrado" alt="img-igrediente" />
        <h1> {ingrediente.nome} </h1>
        <span> Categoria </span>

        <p> {ingrediente.categoriaPrincipal} </p>

        <Link to={`/editar-ingrediente/${id}`}>
            <button>Editar</button>
          </Link>
      </div>
    </div>
  );
}

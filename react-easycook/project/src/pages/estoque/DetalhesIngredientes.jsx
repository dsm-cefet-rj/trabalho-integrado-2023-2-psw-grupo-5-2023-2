import React, { useEffect, useState } from "react";
import Cabecalho from "../../components/compartilhados/Cabecalho";
import "../../styles/detalhesIngrediente.css";
import img from "../../images/quadrado-vinho.jpg";
import { useParams } from "react-router-dom";
import { FetchScript } from "../../scripts/ApiBackend";
import { Link } from "react-router-dom";

export default function DetalhesIngrediente() {
  const { id } = useParams();
  const [ingrediente, setingrediente] = useState({});

  useEffect(() => {
    // Sua lógica para buscar os detalhes do ingrediente por ID
    // Atualize o estado do ingrediente com os dados recebidos da API
    // Exemplo hipotético:
    fetch(`http://localhost:3001/ingrediente/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setingrediente(data); // Atualiza o estado com os dados recebidos
      })
      .catch((error) => console.error('Erro ao buscar os detalhes do ingrediente:', error));
  }, [id]);

  return (
    <div className="DetalhesIngrediente">
      <Cabecalho titulo="Detalhes" fundo="claro" outros home />
      <div className="corpo">
        <img src={img} className="imagem-quadrado" alt="img-igrediente" />
        {ingrediente.nome && ingrediente.categoriaPrincipal ? (
          <>
            <h1>{ingrediente.nome}</h1>
            <span>Categoria</span>
            <p>{ingrediente.categoriaPrincipal}</p>
            <Link to={`/editar-ingrediente/${id}`}>
              <button>Editar</button>
            </Link>
          </>
        ) : (
          <p>Carregando detalhes do ingrediente...</p>
        )}
      </div>
    </div>
  );
}

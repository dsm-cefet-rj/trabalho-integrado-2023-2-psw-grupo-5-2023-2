import React, {useState, useEffect} from "react";
import Cabecalho from "../../components/compartilhados/Cabecalho";
import "../../styles/editarIngrediente.css";
import img from "../../images/quadrado-vinho.jpg";
import {
  CategoriasDeIngredientes,
  OpcoesDeMedidas,
  OpcoesDeVariacao,
} from "../../listas";
import { useParams } from "react-router-dom";
import { FetchScript } from "../../scripts/ApiBackend";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditarIngrediente() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [nome, setnome] = useState("");
  const [categoriaPrincipal, setcategoriaPrincipal] = useState(null);
  const [ingrediente, setingrediente] = useState([]);

  useEffect(() => {
  FetchScript.getDataById(FetchScript.RequestPaths.ingredientes, id)
    .then((response) => setingrediente(response));
  }, [id]);
  
  const handleAtualizarIngrediente = () => {
    const requestBody = {
      nome,
      categoriaPrincipal,
    
    };
    
    FetchScript.patchApiData(FetchScript.RequestPaths.ingredientes, id, requestBody);
    

  }

  
  return (
    <div className="EditarIngrediente">
      <Cabecalho titulo="Detalhes (EDITANDO)" ></Cabecalho>
      <div className="corpo">
        <img src={img} class="imagem-quadrado" />
        <input
          id="edit-nome-ingrediente"
          type="text"
          value={nome}
          onChange={(e) => setnome(e.target.value)}
          placeholder={ingrediente.nome}
        />
        <span> Categoria </span>
        <select id="edit-categoria-ingrediente" value={categoriaPrincipal} onChange={(e) => setcategoriaPrincipal(e.target.value)} >
        {CategoriasDeIngredientes.map((cat) => (
              <option value={cat}>{cat}</option>
            ))}
        </select>
        <Link
            to={`/detalhes-ingrediente/${id}`}
            
            className="salvar"
          >
            <button onClick={handleAtualizarIngrediente}>Salvar</button>
          </Link>
          
          <Link
            to={`/detalhes-ingrediente/${id}`}
            
            className="cancelar"
          >
            <button>Cancelar</button>
          </Link>
      </div>
    </div>
  );
}

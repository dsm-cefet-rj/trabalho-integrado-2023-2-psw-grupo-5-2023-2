import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../../components/compartilhados/Cabecalho";
import {
  CategoriasDeIngredientes,
  OpcoesDeMedidas,
  OpcoesDeVariacao,
} from "../../listas";
import img from "../../images/quadrado-vinho.jpg";
import { FetchScript as fs } from "../../scripts/ApiBackend";
import authService from "../../auth/auth.service";

export default function App() {
  let navigate = useNavigate();
  const [opcoesSubstitutos, setOpcoesSubstitutosSubstitutos] = useState([]);

  const [id, setId] = useState();
  const [nome, setnome] = useState("");
  const [categoriaPrincipal, setcategoriaPrincipal] = useState(null);
  const [outrasCategorias, setOutrasCategorias] = useState("");
  const [medida, setmedida] = useState(null);
  const [qtd, setqtd] = useState(0);
  const [variacao, setvariacao] = useState(0);
  const [substitutos, setSubstitutos] = useState([]);
  const [descricao, setdescricao] = useState("");

  useEffect(() => {
    if (!authService.isAuthorized()) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="container-fluid px-0 mx-auto text-center">
      <Cabecalho titulo="Novo Ingrediente" fundo="escuro"></Cabecalho>

      <div className="row col-10 px-5 mx-auto text-center align-items-center justify-content-center my-3 py-3">
        <div className="input-group mb-3 px-0">
          <label className="input-group-text">Nome</label>
          <input
            placeholder="Nome do Ingrediente"
            type="text"
            onChange={(e) => setnome(e.target.value)}
            className="form-control bg-azure"
          />
        </div>

        <div className="input-group mb-3 px-0">
          <select
            className="form-select bg-azure"
            onChange={(e) => setcategoriaPrincipal(e.target.value)}
          >
            <option disabled selected value hidden="true">
              Categoria Principal
            </option>
            {CategoriasDeIngredientes.map((cat) => (
              <option value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="input-group mb-3 px-0">
          <select
            className="form-select bg-azure rounded-3 me-2"
            onChange={(e) => setmedida(e.target.value)}
          >
            <option disabled selected value hidden="true">
              Medidas
            </option>
            {OpcoesDeMedidas.map((med) => (
              <option value={med}>{med}</option>
            ))}
          </select>
          <select
            className="form-select bg-azure rounded-3 ms-2"
            onChange={(e) => setvariacao(e.target.value)}
          >
            <option disabled selected value hidden="true">
              Variações
            </option>
            {OpcoesDeVariacao.map((vari) => (
              <option value={vari * 1}>{vari}</option>
            ))}
          </select>
        </div>

        <div className="px-0 justify-content-center">
          <span className="input-group-text"> Descrição </span>
          <textarea
            onChange={(e) => setdescricao(e.target.value)}
            className="form-control bg-azure"
            rows={3}
          ></textarea>
        </div>
      </div>

      <div className="row justify-content-center mx-auto px-0">
        <button
          className="btn btn-primary col-6"
          onClick={handleNovoIngrediente}
        >
          Criar
        </button>
      </div>
    </div>
  );

  function handleNovoIngrediente() {
    if (
      nome === "" ||
      categoriaPrincipal === null ||
      medida === null ||
      variacao === 0
    ) {
      return console.log("Preencha os campos!");
    }
    let requestBody = JSON.stringify({
      id,
      nome,
      categoriaPrincipal,
      medida,
      qtd: qtd,
      variacao: parseFloat(variacao),
      descricao,
    });
    console.log(requestBody);

    fs.postData(fs.RequestPaths.ingredientes, requestBody);
    setTimeout(() => {
      navigate("/estoque/");
    }, 150);
  }
}

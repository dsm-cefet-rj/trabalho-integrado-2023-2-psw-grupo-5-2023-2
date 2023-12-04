import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CategoriasDeReceitas } from "../../listas";
import { FetchScript as fs } from "../../scripts/ApiBackend";
import SelecaoComponent from "../../components/compartilhados/selecao/SelecaoComponent";

export default function BodyNovaReceita() {
  return ContainerNovaReceitas();
}

function ContainerNovaReceitas() {
  let navigate = useNavigate();
  const [nome, setnome] = useState("");
  const [categoriaPrincipal, setcategoriaPrincipal] = useState(null);
  const [descricao, setdescricao] = useState("");
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    fs.listAllData("/ingrediente/").then((value) => {
      setIngredientes(value);
    });
  }, []);

  return (
    <div className="Container" id="container">
      <form
        className="row col-10 px-5 mx-auto text-center align-items-center justify-content-center my-3 py-3"
        id="form"
      >
        <div className="">
          <div className="input-group mb-3 px-0">
            <label className="input-group-text"> Nome </label>
            <br></br>
            <input
              onChange={(e) => setnome(e.target.value)}
              placeholder="Nome"
              type="text"
              className="form-control bg-azure"
              id="criar-nome-ing"
            />
          </div>

          <div className="input-group mb-3 px-0">
            <label className="input-group-text"> Categoria Principal </label>
            <br></br>
            <select
              className="form-select bg-azure"
              onChange={(e) => setcategoriaPrincipal(e.target.value)}
            >
              <option disabled selected value hidden="true">
                Categoria Principal
              </option>
              {CategoriasDeReceitas.map((cat) => (
                <option value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <SelecaoComponent
            ingredientes={ingredientes}
            labelQtd={true}
            updateEscolha={updateEscolha}
            updateQtd={updateQtd}
          />

          <div
            className="px-0 justify-content-center"
            onChange={(e) => setdescricao(e.target.value)}
          >
            <span className="input-group-text">
              {" "}
              Descrição e Modo de Preparo{" "}
            </span>
            <textarea
              className="form-control bg-azure"
              rows={3}
              placeholder="Descrição e Modo de Preparo"
            ></textarea>
          </div>
          <br></br>

          <div className="mx-auto px-0">
            <button
              type="button"
              className="btn btn-primary col-6"
              onClick={handleNovaReceita}
            >
              {" "}
              Criar{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  function handleNovaReceita() {
    if (nome === "" || categoriaPrincipal === null) {
      return console.log("Preencha os campos!");
    }

    let ings = ingredientes;
    ings = ings.filter((e) => {
      return e.chosen === true;
    });

    let requestBody = JSON.stringify({
      nome,
      categoriaPrincipal,
      ings,
      descricao,
    });
    console.log(requestBody);

    /*
    fs.postApiData("receitas", requestBody);
    setTimeout(() => {
      navigate("/receitas/");
    }, 250);
    */
  }

  function updateQtd(ing, novaQtd) {
    const ings = [...ingredientes];

    let index = ingredientes.indexOf(ing);
    let ingrediente = ings[index];

    ing.qtd = novaQtd;

    ings[index] = ingrediente;

    setIngredientes(ings);
  }

  function updateEscolha(ing) {
    const ings = [...ingredientes];

    let index = ingredientes.indexOf(ing);
    let ingrediente = ings[index];

    ingrediente.chosen = !ingrediente.chosen;
    console.log(ingrediente.chosen);
    ings[index] = ingrediente;

    setIngredientes(ings);
  }
}

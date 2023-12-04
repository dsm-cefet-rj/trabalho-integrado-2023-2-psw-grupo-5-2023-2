import { React, useState, useEffect } from "react";
import SelecaoComponent from "../../components/compartilhados/selecao/SelecaoComponent";
import { FetchScript as fs } from "../../scripts/ApiBackend";

export default function BodyNovaListaDeCompras() {
  const [nomeLista, setNomeLista] = useState("");
  const [descricaoLista, setDescricaoLista] = useState("");
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    fs.listAllData(fs.RequestPaths.ingredientes).then((response) => {
      let ings = [];
      response.forEach((element) => {
        element["chosen"] = false;
        ings.push(element);
      });
      setIngredientes(ings);
    });
  }, []);

  return (
    <div className="Container">
      <form>
        <div className="row col-10 px-5 mx-auto text-center align-items-center justify-content-center my-3 py-3">
          <div className="input-group mb-3 px-0">
            <label for="nome-lista" className="input-group-text">
              Nome
            </label>
            <input
              type="text"
              className="form-control width bg-branco cor-cinza"
              id="nome-lista"
              aria-describedby="nome-lista"
              onChange={(e) => setNomeLista(e.target.value)}
            />
          </div>
          <SelecaoComponent
            ingredientes={ingredientes}
            updateQtd={updateQtd}
            updateEscolha={updateEscolha}
            labelQtd={true}
          />
          <div className=" mb-3 px-0">
            <label for="descricao-lista" className="input-group-text">
              Descrição
            </label>
            <textarea
              className="form-control width bg-branco cor-cinza"
              id="descricao-lista"
              rows="3"
              onChange={(e) => setNomeLista(e.target.value)}
            ></textarea>
          </div>
          <div className="row justify-content-center mx-auto px-0">
            <button
              type="button"
              className="btn btn-primary col-6"
              onClick={submit}
            >
              Criar
            </button>
          </div>
        </div>
      </form>
    </div>
  );

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

  // TODO: Construir a lista de monitoracoes
  // TODO: Post request
  function submit() {
    if (nomeLista === "") return;

    let ings = ingredientes;
    ings = ings.filter((e) => {
      return e.chosen === true;
    });

    let body = {
      nome: nomeLista,
      descricao: descricaoLista,
      ingredientes: ings,
    };
    console.log(body);
  }
}

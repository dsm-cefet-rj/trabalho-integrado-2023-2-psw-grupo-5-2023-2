import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../../components/compartilhados/Cabecalho";
import {
  CategoriasDeIngredientes,
  OpcoesDeMedidas,
  OpcoesDeVariacao,
} from "../../listas";
import { FetchScript, FetchScript as fs } from "../../scripts/ApiBackend";
import SelecaoComponent from "../../components/compartilhados/selecao/SelecaoComponent";
import authService from "../../auth/auth.service";

export default function EditarEstoque() {
  let navigate = useNavigate();
  const [ingredientes, setIngredientes] = useState([]);
  const [monitoracoes, setMonitoracoes] = useState({ ingredientes: [] });

  useEffect(() => {
    fs.listAllData(fs.RequestPaths.ingredientes).then((response) => {
      let ings = [];
      response.forEach((element) => {
        element["chosen"] = element.active ? element.active : false;
        ings.push(element);
      });

      setIngredientes(ings);
    });
  }, []);

  return (
    <div className="container-fluid px-0 mx-auto text-center">
      <Cabecalho titulo="Editar Estoque" fundo="escuro"></Cabecalho>

      <div className="row col-10 px-5 mx-auto text-center align-items-center justify-content-center my-3 py-3">
        <div className="input-group mb-3 px-0"></div>

        <SelecaoComponent
          ingredientes={ingredientes}
          updateQtd={updateQtd}
          updateEscolha={updateEscolha}
          labelQtd={true}
        />

        <div className="row justify-content-center mx-auto px-0">
          <button className="btn btn-primary col-6" onClick={submit}>
            Atualizar
          </button>
        </div>
      </div>
    </div>
  );

  function handleNovoIngrediente() {
    /*
    fs.postData(fs.RequestPaths.ingredientes, requestBody);
    setTimeout(() => {
      navigate("/estoque/");
    }, 150);
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

  // TODO: Construir a lista de monitoracoes
  // TODO: Post request
  function submit() {
    let ings = ingredientes;
    ings = ings.filter((e) => {
      return e.chosen === true;
    });

    let monitoracoes = [];

    ings.forEach((i) => {
      monitoracoes.push({
        ingrediente: i.id,
        qtd: i.qtd,
        owner: authService.getCurrentUser().estoque,
        ownerType: "Estoque",
      });
    });

    let body = JSON.stringify({
      ingredientes: monitoracoes,
    });
    console.log(body);

    FetchScript.postData(
      FetchScript.RequestPaths.estoque +
        authService.getCurrentUser().id +
        "/ingredientes",
      body
    );
  }
}

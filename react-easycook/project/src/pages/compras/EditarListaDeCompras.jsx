import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cabecalho from "../../components/compartilhados/Cabecalho";
import {
  CategoriasDeIngredientes,
  OpcoesDeMedidas,
  OpcoesDeVariacao,
} from "../../listas";
import { FetchScript, FetchScript as fs } from "../../scripts/ApiBackend";
import SelecaoComponent from "../../components/compartilhados/selecao/SelecaoComponent";
import authService from "../../auth/auth.service";

export default function EditarListaDeCompras() {
  let navigate = useNavigate();
  const [ingredientes, setIngredientes] = useState([]);
  const [lista, setLista] = useState({});
  const [monitoracoes, setMonitoracoes] = useState({ ingredientes: [] });
  const { id } = useParams();

  useEffect(() => {
    fs.getDataById(fs.RequestPaths.listas, id).then((res) => {
      setLista(res);

      fs.listAllData(fs.RequestPaths.ingredientes).then((response) => {
        let ings = [];
        response.forEach((element) => {
          let iElement = res.ingredientes.findIndex((ing) => {
            return ing.nome === element.nome;
          });
          element["chosen"] = iElement > -1 ? true : false;
          ings.push(element);
        });
        setIngredientes(ings);
      });
    });
  }, []);

  return (
    <div className="container-fluid px-0 mx-auto text-center">
      <Cabecalho
        titulo={"Editar Lista de Compras: " + lista.nome}
        fundo="escuro"
      ></Cabecalho>

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
        owner: id,
        ownerType: "Lista",
      });
    });

    let body = JSON.stringify({
      ingredientes: monitoracoes,
    });
    console.log(body);

    FetchScript.postData(
      FetchScript.RequestPaths.listas +
        `${authService.getCurrentUser().id}/` +
        lista.id,
      body
    );
  }
}

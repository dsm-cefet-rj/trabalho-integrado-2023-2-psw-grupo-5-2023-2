import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DetalhesPopup from "./DetalhesPopup";

export default function ListaCompras({ nome, id, ingredientes }) {
  var [popup, setPopup] = useState(true);
  var [ingredientString, setIngredientString] = useState("");

  useEffect(() => {
    var s = "";
    ingredientes.map((ing) => {
      s = s + ing.nome + ", ";
    });
    setIngredientString(s);
  });

  return (
    <div
      id=""
      className="row w-100 align-items-center text-center border-bottom mt-3 py-3"
    >
      <div className="col-10 d-flex">
        <label id="id" className="col-1 my-auto">
          {id}
        </label>
        <label id="nome" className="col-2 my-auto">
          {nome}
        </label>
        <p className="col-9 my-auto">{ingredientString}</p>
      </div>
      <div className="col-2">
        <div className="row d-flex justify-content-center">
          <DetalhesPopup
            id={id}
            favoritavel={false}
            removeObjeto={""}
            favoritaObjeto={""}
            rotaConsulta={"detalhes-lista-compras"}
            redundante={true}
          ></DetalhesPopup>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function SelecaoComponent( {
  ingredientes,
  updateQtd,
  updateEscolha,
  labelQtd = false,
}) {

  return (
    <div className="container-fluid border-black border-black mb-2 overflow-auto" style={{height: "250px"}}>
        {input()}
    </div>
  );

  function input() {
    return ingredientes.map((ing) => (
      <div className="row mb-1">
        <div className="col-2 mx-0 px-0">
          <button className="form-control bg-azure" type="button" onClick={(e) => updateEscolha(ing)}>{ing.chosen? "S" : "N"}</button>
        </div>
        <div className="col mx-0 px-0">
          <label className="input-group-text">{ing.nome}</label>
        </div>
        <div className="col-3 mx-0 px-0" hidden={!labelQtd}>
          <span className="input-group-text py-auto">Qtd ({ing.medida}):
          </span>
        </div>
        <div className="col-2 mx-0 px-0" hidden={!labelQtd}>
          <input className="form-control bg-azure" type="number" min="0" step={ing.variacao} 
          value={ing.qtd} onChange={(e) => updateQtd(ing, e.target.value)}></input>
        </div>
      </div>
    ));
  }

};
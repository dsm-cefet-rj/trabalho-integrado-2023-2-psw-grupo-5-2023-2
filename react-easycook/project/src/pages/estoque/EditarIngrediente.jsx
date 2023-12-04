import React from "react";
import Cabecalho from "../../components/compartilhados/Cabecalho";
import "../../styles/editarIngrediente.css";
import img from "../../images/quadrado-vinho.jpg";

export default function EditarIngrediente() {
  return (
    <div className="EditarIngrediente">
      <Cabecalho titulo="Detalhes (EDITANDO)" salvar cancelar></Cabecalho>
      <div className="corpo">
        <img src={img} class="imagem-quadrado" />
        <input
          id="edit-nome-ingrediente"
          type="text"
          placeholder="Nome do Ingrediente"
        />
        <span> Categoria </span>
        <select id="edit-categoria-ingrediente">
          <option> Categoria </option>
          <option> Categoria 2 </option>
          <option> Categoria 3 </option>
        </select>
        <span> Substitutos </span>
        <table id="tabela-substitutos">
          <tr>
            <td>
              <select class="edit-select-ingrediente">
                <option> Ingrediente 1 </option>
                <option> Ingrediente 2 </option>
                <option> Ingrediente 3 </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <select class="edit-select-ingrediente">
                <option> Ingrediente 5 </option>
                <option> Ingrediente 2 </option>
                <option> Ingrediente 3 </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <select class="edit-select-ingrediente">
                <option> Ingrediente 10 </option>
                <option> Ingrediente 2 </option>
                <option> Ingrediente 3 </option>
              </select>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

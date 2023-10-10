import React from "react";

export default function ContainerBodyLC() {
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
          />
        </div>
        <div className="input-group mb-3 px-0">
          <select
            className="form-select width bg-branco cor-cinza"
            id="ingredientes-form"
            aria-describedby="ingredientes-form"
          >
            <option>Escolha os ingredientes</option>
            <option>Ingrediente 1</option>
            <option>Ingrediente 2</option>
            <option>Ingrediente 3</option>
          </select>
        </div>
        <div className=" mb-3 px-0">
          
            <div className="section input-group">
              <label for="Qtd" className="input-group-text">Ingrediente </label>
              <input
                className="Qtd"
                type="number"
                name="Qtd"
                id="Qtd"
                placeholder="Qtd"
                min="1"
                step="1"
              />
              <label for="Qtd" className="input-group-text">Un</label>
            </div>
            <br></br>
            <div className="div-ing section input-group">
              <label for="Qtd" className="input-group-text">Ingrediente </label>
              <input
                className="Qtd"
                type="number"
                name="Qtd"
                id="Qtd"
                placeholder="Qtd"
                min="1"
                step="1"
              />
              <label for="Qtd" className="input-group-text">Kg</label>
            </div>
            <br></br>
            <div className="div-ing section input-group">
              <label for="Qtd" className="input-group-text">Ingrediente </label>
              <input
                className="Qtd"
                type="number"
                name="Qtd"
                id="Qtd"
                placeholder="Qtd"
                min="100"
                step="50"
              />
              <label for="Qtd" className="input-group-text">mL</label>
            </div>
            <br></br>
            <label for="descricao-lista" className="input-group-text">
              Descrição
            </label>
            <textarea
              className="form-control width bg-branco cor-cinza"
              id="descricao-lista"
              rows="3"
            ></textarea>
          
          </div>
          <div className="row justify-content-center mx-auto px-0">
            <button type="submit" className="btn btn-primary col-6">
              Criar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

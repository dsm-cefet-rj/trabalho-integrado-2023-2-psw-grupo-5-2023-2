import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../src/images/quadrado-vinho.jpg";
import NotFound from "../pages/NotFound";
import {
  CategoriasDeReceitas,
} from "../listas";
import { FetchScript as fs } from "../scripts/fetchScripts";

export default function ContainerBodyNovaPagina({ tipoBody = "" }) {
  return escolheContainer(tipoBody);
}

function escolheContainer(tipoBody) {
  if (tipoBody === "") {
    return NotFound();
  } else if (tipoBody === "novo-ingrediente") {
    return ContainerNovoIngrediente();
  } else if (tipoBody === "nova-lista-de-compras") {
    return ContainerNovaListaDeCompras();
  } else if (tipoBody === "nova-receita") {
    return ContainerNovaReceitas();
  }
}

function ContainerNovoIngrediente() {
  return (
    <div id="container" className="Container">
      <form>
        <div className="area-img">
          <img src={img} className="quadrado" alt="imagem-ingrediente" />
        </div>

        <div className="area-nome">
          <label> Nome </label>
          <br></br>
          <input placeholder="Nome" type="text" id="criar-nome-ing" />
        </div>

        <div className="area-categoria">
          <label> Categoria Principal </label>
          <br></br>
          <select className="categoria">
            <option> Categoria 1</option>
            <option> Categoria 2 </option>
            <option> Categoria 3 </option>
            <option> Categoria 4 </option>
          </select>
        </div>

        <div className="area-medidas">
          <label> Medidas </label>
          <br></br>
          <select className="medida">
            <option> Kg</option>
            <option> g </option>
            <option> unidade </option>
            <option> mL </option>
          </select>
        </div>

        <div className="area-var-padrao">
          <label> Variação Padrão? </label>
          <br></br>
          <select className="var-padrao">
            <option> Variação 1 </option>
            <option> Variação 2 </option>
            <option> Variação 3 </option>
            <option> Variação 4 </option>
          </select>
        </div>

        <div className="area-outras-categorias">
          <label> Outras Categorias </label>
          <br></br>
          <select className="outras-categorias">
            <option> Outras Categorias 1 </option>
            <option> Outras Categorias 2 </option>
            <option> Outras Categorias 3 </option>
            <option> Outras Categorias 4 </option>
          </select>
        </div>

        <div className="area-substitutos">
          <label> Substitutos </label>
          <br></br>
          <select className="substitutos">
            <option> Substituto 1 </option>
            <option> Substituto 2 </option>
            <option> Substituto 3 </option>
            <option> Substituto 4 </option>
          </select>
        </div>

        <div className="area-descricao">
          <label> Descrição </label>
          <br></br>
          <textarea cols="33" rows="6"></textarea>
        </div>

        <button className="botao" type="submit">
          {" "}
          Criar{" "}
        </button>
      </form>
    </div>
  );
}

function ContainerNovaListaDeCompras() {
  return (
    <div className="Container">
      <form className="grid" id="form">
        <div className="area1">
          <div className="area-nome">
            <label> Nome </label>
            <br></br>
            <input
              placeholder="Nome"
              type="text"
              class="criar-nome-ing"
            ></input>
          </div>
          <div className="area-ingredientes">
            <label> Ingredientes </label>
            <br></br>
            <select className="ingredientes">
              <option>Ingrediente 1</option>
              <option>Ingrediente 2</option>
              <option>Ingrediente 3</option>
            </select>
          </div>
        </div>
        <div className="area3">
          <div className="section">
            <div className="div-ing">
              <label for="Qtd">Ingrediente </label>
              <input
                className="Qtd"
                type="number"
                name="Qtd"
                id="Qtd"
                placeholder="Qtd"
                min="1"
                step="1"
              />
              <label for="Qtd">Un</label>
            </div>
            <br></br>
            <div className="div-ing">
              <label for="Qtd">Ingrediente </label>
              <input
                className="Qtd"
                type="number"
                name="Qtd"
                id="Qtd"
                placeholder="Qtd"
                min="1"
                step="1"
              />
              <label for="Qtd">Kg</label>
            </div>
            <br></br>
            <div className="div-ing">
              <label for="Qtd">Ingrediente </label>
              <input
                className="Qtd"
                type="number"
                name="Qtd"
                id="Qtd"
                placeholder="Qtd"
                min="1"
                step="1"
              />
              <label for="Qtd">mL</label>
            </div>
          </div>

          <div className="area-descricao">
            <label> Descrição </label>
            <br></br>
            <textarea
              cols="33"
              rows="6"
              placeholder="Descrição da Lista de Compras"
            ></textarea>
          </div>
          <button type="submit"> Criar </button>
        </div>
      </form>
    </div>
  );
}

function ContainerNovaReceitas() {
  let navigate = useNavigate();
  const [id, setId] = useState();
  const [nome, setnome] = useState("");
  const [categoriaPrincipal, setcategoriaPrincipal] = useState(null);
  const [descricao, setdescricao] = useState("");
  const [ingredientes, setIngredientes] = useState([])
  const [opcoesSubstitutos, setOpcoesSubstitutosSubstitutos] = useState([]);

  useEffect(() => {
    fs.getApiData("ingredientes").then((value) => {
      setOpcoesSubstitutosSubstitutos(value);
  
    });
    fs.getApiData("receitas").then((value) => {
      setId(value.length);
    })
  }, []);



  return (
    <div className="Container" id="container">
      <form className="row col-10 px-5 mx-auto text-center align-items-center justify-content-center my-3 py-3" id="form">
        
        <div className="">
          <div className="input-group mb-3 px-0">
            <label className="input-group-text"> Nome </label>
            <br></br>
            <input onChange={e => setnome(e.target.value)} placeholder="Nome" type="text"  className="form-control bg-azure" id="criar-nome-ing" />
          </div>

          <div className="input-group mb-3 px-0">
            <label className="input-group-text"> Categoria Principal </label>
            <br></br>
            <select className="form-select bg-azure" onChange={e => setcategoriaPrincipal(e.target.value)}>
            <option disabled selected value hidden="true">
              Categoria Principal
            </option>
            {CategoriasDeReceitas.map((cat) => (
              <option value={cat}>{cat}</option>
            ))}
            </select>
          </div>

          <div className="input-group">
            <label className="input-group-text"> Ingredientes </label>
            <br></br>
            <select style={{ width: "70%" }} className="ingrediente" onChange={(e) => {
              setIngredientes(JSON.parse(e.target.value));
              console.log(e.target.value);
            }}>
            <option selected value={[]}>
              Ingredientes
            </option>
            {opcoesSubstitutos.map((sub) => (
              <option value={JSON.stringify(sub)}>{sub.nome}</option>
            ))}
            </select>
            <div id="buttons" style={{ width: "15%" }} className="buttons">
              <button>+</button>
              <button>-</button>
            </div>
          </div>
        

          <div className="input-group mb-3 px-0" onChange={e => setdescricao(e.target.value)}>
            <label className="input-group-text"> Descrição e Modo de Preparo </label>
            <br></br>
            <textarea className="input-group mb-0 px-9 form-control bg-azure" cols="33" rows="6" placeholder="Descrição e Modo de Preparo">
              
            </textarea>
          </div>

          <button type="submit" onClick={handleNovaReceita}> Criar </button>
        </div>
      </form>
    </div>
  );

  function handleNovaReceita() {
    if (
      nome === "" ||
      categoriaPrincipal === null 
    ) {
      return console.log("Preencha os campos!");
    }
    let requestBody = JSON.stringify({
      id,
      nome,
      categoriaPrincipal,
      ingredientes,
      descricao,
    });
    console.log(requestBody);

    fs.postApiData("receitas", requestBody);
    setTimeout(() => {
      navigate("/receitas/");
    }, 150);
  }
}

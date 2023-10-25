import React, { useEffect, useState } from "react";
import Cabecalho from "../components/Cabecalho";
import { Lista } from "../components/Listas";
import Rodape from "../components/Rodape";
import Receita from "../components/Receita";

export default function Receitas() {
  const [receitas, setreceitas] = useState([]);

  const getApiData = async () => {
    const response = await fetch("receita")
      .then((response) => response.json())
      .then((res) => setreceitas(res))
      .catch(console.log);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <div>
        <Cabecalho titulo="Receitas" home filtro></Cabecalho>
      </div>
      <div>
        <div>
          <Lista
            nomeObjetos="Nova Receita"
            rotaNovoObj="/nova-receita"
            objetos={receitas}
            tipoObjeto={"receita"}
          ></Lista>
        </div>
      </div>
      <Rodape></Rodape>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Cabecalho from "../components/Cabecalho";
import { Lista } from "../components/Listas";
import Rodape from "../components/Rodape";
import Receita from "../components/Receita";
import { FetchScript } from "../scripts/ApiBackend";

export default function Receitas() {
  const [receitas, setreceitas] = useState([]);

  useEffect(() => {
    FetchScript.listAllData(FetchScript.RequestPaths.receitas).then((response) => {

      setreceitas(response);
    });
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

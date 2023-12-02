import React, { useEffect, useState } from "react";
import Cabecalho from "../../components/compartilhados/Cabecalho";
import { Lista } from "../../components/compartilhados/listas/Listas";
import Rodape from "../../components/compartilhados/Rodape";
import Receita from "../../components/compartilhados/listas/Receita";
import { FetchScript } from "../../scripts/ApiBackend";

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

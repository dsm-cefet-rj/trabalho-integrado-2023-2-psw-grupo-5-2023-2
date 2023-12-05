import React, { useEffect, useState } from "react";
import Cabecalho from "../../components/compartilhados/Cabecalho";
import { Lista } from "../../components/compartilhados/listas/Listas";
import Rodape from "../../components/compartilhados/Rodape";
import Receita from "../../components/compartilhados/listas/Receita";
import { FetchScript } from "../../scripts/ApiBackend";
import authService from "../../auth/auth.service";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Receitas() {
  const [receitas, setreceitas] = useState([]);
  const [user, setUser] = useState(authService.getCurrentUser());

  let navigate = useNavigate();

  useEffect(() => {
    if (!authService.isAuthorized()) {
      navigate("/login");
    }

    FetchScript.listAllData(`/receita/user/${user.id}`).then((response) => {
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
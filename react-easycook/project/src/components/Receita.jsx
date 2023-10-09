import { useState } from "react";
import { Link } from "react-router-dom";
import DetalhesPopup from "./DetalhesPopup";

export default function Receita({nome, categoriaPrincipal, id, descricao, ingredientes}) {
    
    var [popup, setPopup] = useState(true);
    const tmp = ">";

    const removeReceita = async () => {
        const apiUrl = `http://localhost:3002/receitas/${id}`;
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await fetch(apiUrl, requestOptions);
            if (response.ok) {
                console.log(`Receita com ID ${id} removida com sucesso.`);
                // Adicione aqui qualquer ação que você deseja executar após a remoção
            } else {
                console.error(`Erro ao remover a receita com ID ${id}.`);
            }
        } catch (error) {
            console.error(`Erro na solicitação DELETE: ${error}`);
        }
    };
    const HandleRemoveReceitaClick = () =>{
        removeReceita(id)
    }
    return(
        <div className="row w-100 align-items-center text-center border-bottom mt-3 py-3">
            <div className="col-9 d-flex">
                <label id="nome" className="col-2 my auto">{nome}</label>
                <label id="descricao" className="col-4 my auto">{descricao}</label>
                <p className="col-6 my-auto">blablabla</p>
            </div>    
            <div className="col-3">
                <div className="row d-flex justify-content-center">
                    <DetalhesPopup
                        id={id}
                        favoritavel={true}
                        removeObjeto={""}
                        favoritaObjeto={""}
                        rotaConsulta={"detalhes-receita"}
                        redundante={true}
                    ></DetalhesPopup>
                </div>
            </div>
        </div>
    )
}
import { useState } from "react";
import '../styles/ingrediente.css';
import '../styles/receita.css';
import { Link } from "react-router-dom";

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
    const removeClick = () =>{
        removeReceita(id)
    }
    return(
        <div id="receita" className="componente">
            <label id="nome">{nome}</label>
            <label id="descricao">{descricao}</label>

            
            <div className="buttons">
                
                <button onClick={e => setPopup(!popup)}>{tmp}</button>
            </div>
            <div id="popup-detalhes-excluir" hidden={popup}>
                  <Link to={`/detalhes-receita/${id}`}><h3 className="cinza">Detalhes</h3></Link>
                  <h3 className="vermelho" onClick={removeClick}>Remover</h3>
            </div>
        </div>
    )
}
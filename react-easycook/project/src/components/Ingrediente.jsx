import { useState } from "react";
import '../styles/ingrediente.css';

export default function Ingrediente() {
    let [nome, setNome] = useState(null);
    let [categoriaPrincipal, setCategoriaPrincipal] = useState(null);
    let [medida, setMedida] = useState(null);
    let [variacao, setVariacao] = useState(null);
    let [descricao, setDescricao] = useState(null);

    function onCreateIngrediente() {
        setNome();
        setCategoriaPrincipal();
        setMedida();
        setVariacao();
        setDescricao();
    }

    const tmp = ">";
    return(
        <div id="ingrediente" className="componente">
            <label id="nome">Ingrediente</label>
            <label id="qtd">15</label>
            <label id="medida">un</label>
            <div className="buttons">
                <button>+</button>
                <button>-</button>
                <button>{tmp}</button>
            </div>
        </div>
    )
}
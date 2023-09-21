import { useState } from "react";
import '../styles/ingrediente.css';
import { Link } from "react-router-dom"

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
    function popupDetalhesExcluir(){
        var popup = document.getElementById('popup-detalhes-excluir')
        popup.style.visibility = 'visible'
    }
    function excluir(){
        var popup = document.getElementById('popup-detalhes-excluir')
        popup.style.visibility = 'hidden'
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
                <div>
                    <button onClick={popupDetalhesExcluir}>{tmp}</button>
                </div>
                
            </div>
            <div id="popup-detalhes-excluir">
                  <Link to='/detalhes-ingrediente'><h3 className="cinza">Detalhes</h3></Link>
                  <h3 className="vermelho" onClick={excluir}>Remover</h3>
              </div>
        </div>
    )
}
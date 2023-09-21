import { useState } from "react";
import '../styles/ingrediente.css';

export default function Ingrediente({nome = '', qtd = 0, categoriaPrincipal = '', medida = 'Un', variacao = 0, descricao = ''}) {

    const tmp = ">";
    return(
        <div id="ingrediente" className="componente">
            <label id="nome">{nome}</label>
            <label id="qtd">{qtd}</label>
            <label id="medida">{medida}</label>
            <div className="buttons">
                <button>+</button>
                <button>-</button>
                <button>{tmp}</button>
            </div>
        </div>
    )
}
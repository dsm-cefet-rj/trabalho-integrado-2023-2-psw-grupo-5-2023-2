import React, { useState, useEffect } from 'react'
import Cabecalho from '../components/Cabecalho'
import img from '../images/quadrado-vinho.jpg'
import '../styles/detalhesIngrediente.css'
import { useParams } from 'react-router-dom'


export default function DetalhesReceita(){
    const { id } = useParams();

    const [receita, setReceita] = useState([]);
    //var [ingredientes, setIngredientes] = useState(receita['ingredientes'])

    const getApiData = async () => {
        const response = await fetch(
            "http://localhost:3002/receitas/" + id
        ).then((response) => response.json())
        .then((res) => {
            console.log(res['ingredientes'][0].qtd);
            setReceita(res);})
        .catch(console.log);
    }

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div>
            <Cabecalho titulo="Detalhes"></Cabecalho>
            <div className='corpo'>
              <img src={img} className="imagem-quadrado" alt='img-igrediente'/> 
                <h1>[{receita.id}] {receita.nome}</h1>
                <span> Categoria </span>
                
                <p> {receita.categoriaPrincipal} </p>
                <span> Ingredientes </span>
               
                <ul class='ingsReceita'>
                    {
                        receita['ingredientes']?.map((ing) => (
                            <li>{ing.nome}</li>

                        ))
                    }
                </ul>
                
                     <span> Modo de Preparo </span>
                     <label class='preparo'> {receita.descricao} </label>
            </div>
        </div>
    )
}





import React, { useEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import '../styles/detalhesIngrediente.css'
import img from '../images/quadrado-vinho.jpg'
import { useParams } from 'react-router-dom'

export default function DetalhesIngrediente(){
const { id } = useParams();

    const [ingrediente, setingrediente] = useState([]);

    const getApiData = async () => {
        const response = await fetch(
            "http://localhost:3002/ingredientes/" + id
        ).then((response) => response.json())
        .then((res) => setingrediente(res))
        .catch(console.log);
    }

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div className='DetalhesIngrediente'>
            <Cabecalho titulo="Detalhes" fundo='claro' outros home/>
            <div className='corpo'>
                <img src={img} className="imagem-quadrado" alt='img-igrediente'/>
                <h1> {ingrediente.nome} </h1>
                <span> Categoria </span>
                
                <p> Categoria </p>
                <span> Substitutos </span>
                
                <table id="tabela-substitutos">
                    <tr>
                        <td><a href="">Ingrediente 1</a></td>
                    </tr>
                    <tr>
                        <td><a href="">Ingrediente 5</a></td>
                    </tr>
                    <tr>
                        <td><a href="">Ingrediente 10</a></td>
                    </tr>
                </table>
            </div>
            
        </div>
    )

    
}
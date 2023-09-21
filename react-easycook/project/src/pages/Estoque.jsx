import React, { useEffect, useState } from 'react'
import '../styles/estoque.css'
import Rodape from '../components/Rodape'
import Ingrediente from '../components/Ingrediente'
import Cabecalho from '../components/Cabecalho'
import { Lista } from '../components/Listas'

export default function Estoque(){

    const [ingredientes, setIngredientes] = useState([]);

    const getApiData = async () => {
        const response = await fetch(
            "http://localhost:3002/ingredientes"
        ).then((response) => response.json());

        setIngredientes(response);
    }

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div>
            <div>
                <Cabecalho titulo="Estoque" home filtro></Cabecalho>
            </div>
            <div id='estoque'>
                <div className='lista-ingredientes'>
                    <Lista 
                        rotaNovoObj="/novo-ingrediente" 
                        nomeObjetos="Novo Ingrediente"
                        objetos={ingredientes}
                    ></Lista>
                    <Rodape></Rodape>
                </div>
            </div>
        </div>
    )


}


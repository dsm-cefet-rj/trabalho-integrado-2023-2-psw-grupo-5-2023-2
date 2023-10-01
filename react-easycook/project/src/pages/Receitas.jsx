import React, { useEffect, useState } from 'react'
import '../styles/estoque.css'
import Cabecalho from '../components/Cabecalho'
import { Lista } from '../components/Listas'
import Rodape from '../components/Rodape'
import Receita from '../components/Receita'
import '../styles/listas.css'

export default function Receitas(){

    const [receitas, setreceitas] = useState([]);

    const getApiData = async () => {
        const response = await fetch(
            "http://localhost:3002/receitas"
        ).then((response) => response.json())
        .then((res) => setreceitas(res))
        .catch(console.log);
    }

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div>
            <div>
                <Cabecalho titulo="Receitas" home filtro></Cabecalho>
            </div>
            <div className='lista-receitas'>
                <Lista 
                    nomeObjetos="Nova Receita"
                    rotaNovoObj="/nova-receita"
                    objetos={receitas}
                    tipoObjeto={"receita"}
                ></Lista>
                <Rodape></Rodape>
            </div>
        </div>
    )
}
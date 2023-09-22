import React, { useEffect, useState } from 'react'
import '../styles/estoque.css'
import Ingrediente from '../components/Ingrediente'
import Cabecalho from '../components/Cabecalho'
import { Lista } from '../components/Listas'
import Rodape from '../components/Rodape'
import Compras from '../components/ListasCompras'

export default function ListaDeCompras(){
    
    const [listasDeCompras, setListasDeCompras] = useState([]);

    const getApiData = async () => {
        const response = await fetch(
            "http://localhost:3002/listas"
        ).then((response) => response.json())
        .then((res) => setListasDeCompras(res))
        .catch(console.log);
    }

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div>
            <div>
                <Cabecalho titulo="Listas de Compras" home filtro></Cabecalho>
            </div>
            <div id='lista-de-compras'>
                <div className='lista-ingredientes'>
                    <Lista
                        nomeObjetos="Nova Lista de Compras"
                        rotaNovoObj="/nova-lista-de-compras"
                        objetos={listasDeCompras}
                        tipoObjeto={"listaDeCompras"}
                    ></Lista>
                    <div className='listas'>
                    </div>
                    <Rodape></Rodape>
                </div>
            </div>
        </div>
    )
}
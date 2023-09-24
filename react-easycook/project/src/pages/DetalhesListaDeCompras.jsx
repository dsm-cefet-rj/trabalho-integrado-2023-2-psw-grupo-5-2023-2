import React, { useEffect, useState } from 'react'
import '../styles/estoque.css'
import Rodape from '../components/Rodape'
//import Ingrediente from '../components/Ingrediente'
import Cabecalho from '../components/Cabecalho'
import { Lista } from '../components/Listas'
import { useParams } from 'react-router-dom'


export default function DetalhesListaDeCompras(){
    const { id } = useParams();
    const [listaCompras, setListaCompras] = useState([]);

    const getApiData = async () => {
        const response = await fetch(
            "http://localhost:3002/ListasDeCompras/" + id
        ).then((response) => response.json())
        .then((res) => setListaCompras(res))
        .catch(console.log);
    }

    const atualizarQtdDB = async (listasId, novaQtd) => {
        try{
            const result = await fetch(`http://localhost:3002/ListaDeCompras/${listasId}`, {
              method: 'PATCH',
              body: JSON.stringify({ qtd: novaQtd }),
              headers: {
                'Content-Type': 'application/json',
               },
            });

            if (result.ok) {
            console.log('Quantidade atualizada com sucesso no banco de dados.');
            } else {
                console.error('Falha ao atualizar a quantidade no banco de dados.');
            }
        } catch (error) {
            console.error('Erro ao atualizar a quantidade no banco de dados:', error);
        }
    }
    
    

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div>
            <div>
                <Cabecalho titulo={listaCompras.nome} home filtro></Cabecalho>
            </div>
            <div id='listaDeCompras'>
                <div className='lista-ingredientes'>
                    <Lista 
                        rotaNovoObj="/novo-ingrediente"  
                        nomeObjetos="Novo Ingrediente"
                        objetos={listaCompras}
                        tipoObjeto="ingrediente"
                        atualizarQtdDB={atualizarQtdDB}
                    ></Lista>
                    <div className='listas'>
                    </div>
                    
                    <Rodape></Rodape>
                </div>
            </div>
        </div>
    )


}
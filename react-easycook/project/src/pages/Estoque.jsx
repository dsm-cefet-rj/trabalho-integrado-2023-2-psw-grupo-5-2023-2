import React, { useEffect, useState } from 'react'
import '../styles/estoque.css'
import Rodape from '../components/Rodape'
import Ingrediente from '../components/Ingrediente'
import Cabecalho from '../components/Cabecalho'
import { Lista } from '../components/Listas'


export default function Estoque(){

    const [ingredientes, setIngredientes] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);
    const refreshPageWithKey = (key) => {
        setRefreshKey(key);
    }

    const getApiData = async () => {
        const response = await fetch(
            "http://localhost:3002/ingredientes"
        ).then((response) => response.json())
        .then((data) => setIngredientes(data))
        .catch(console.log);
    }

    const atualizarQtdDB = async (ingredienteId, novaQtd) => {
        try{
            const result = await fetch(`http://localhost:3002/ingredientes/${ingredienteId}`, {
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
    }, [refreshKey]);

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
                        tipoObjeto="ingrediente"
                        atualizarQtdDB={atualizarQtdDB}
                        refreshPageWithKey={refreshPageWithKey}
                    ></Lista>
                    <div className='listas'>
                    </div>
                    
                    <Rodape></Rodape>
                </div>
            </div>
        </div>
    )


}


import React, { useEffect, useState } from 'react'
import '../styles/estoque.css'
import Rodape from '../components/Rodape'
import Ingrediente from '../components/Ingrediente'
import Cabecalho from '../components/Cabecalho'
import { Lista } from '../components/Listas'
import { useParams } from 'react-router-dom'

export default function DetalhesCompras(){
    
    const [ingredientes, setIngredientes] = useState([]);
    
    const { id } = useParams();

    const [lista, setLista] = useState([]);

    const getApiData = async () => {
        const response = await fetch(
            "http://localhost:3002/listas/" + id
        ).then((response) => response.json())
        .then((res) => {
            console.log(res);
            setLista(res);
            setIngredientes(res['ingredientes']);
        })
        .catch(console.log);
    }
    

    useEffect(() => {
        getApiData();
    }, []);

    
    

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

    return (
        <div>
            <div>
                <Cabecalho titulo="Lista" home filtro></Cabecalho>
            </div>
            <div id='lista-compras'>
                <div className='lista-ingredientes'>
                    <Lista 
                        rotaNovoObj="/novo-ingrediente" 
                        nomeObjetos="Novo Ingrediente"
                        objetos={ingredientes}
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


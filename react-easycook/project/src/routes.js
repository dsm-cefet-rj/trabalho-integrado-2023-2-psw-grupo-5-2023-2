import React from "react"
import { Route, BrowserRouter, redirect } from "react-router-dom"

    // Páginas
import Login from '../src/pages/Login.jsx'
import HomePage from '../src/pages/HomePage.jsx'
import NovoIngrediente from '../src/pages/NovoIngrediente.jsx'
import EditarIngrediente from '../src/pages/EditarIngrediente.jsx'
import Estoque from '../src/pages/Estoque.jsx'
import Cadastro from "../src/pages/Cadastro.jsx"
import NotFound from "../src/pages/NotFound.jsx"
import NovaListaDeCompras from "../src/pages/NovaListaDeCompras.jsx"
import ListaDeCompras from "../src/pages/ListasDeCompras.jsx"
import Receitas from "../src/pages/Receitas.jsx"
import NovaReceita from "../src/pages/NovaReceita.jsx"
import DetalhesIngredientes from "../src/pages/DetalhesIngredientes.jsx"
import DetalhesReceita from "../src/pages/DetalhesReceita.jsx"
import DetalhesCompras from "../src/pages/DetalhesCompras.jsx"

    // path: 'caminho após o link'
    //element: <Página/>
export const Routes = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: 'novo-ingrediente',
        element: <NovoIngrediente/>
    },
    
    {
        path: 'login',
        element: <Login/>
    },
    {
        path: 'editar-ingrediente',
        element: <EditarIngrediente/>
    },
    {
        path: 'estoque',
        element: <Estoque/>
    },
    {
        path: 'cadastre-se',
        element: <Cadastro/>
    },
    {
        path: 'nova-lista-de-compras',
        element: <NovaListaDeCompras/>
    },
    {
        path: 'listas-de-compras',
        element: <ListaDeCompras/>
    },
    {
        path: 'receitas',
        element: <Receitas/>
    },
    {
        path: 'nova-receita',
        element: <NovaReceita/>
    },
    {
        path: '/detalhes-ingrediente/:id',
        element: <DetalhesIngredientes/>
    },
    {
        path: '/detalhes-receita/:id',
        element: <DetalhesReceita/>
    },    
    {
        path: '*',
        element: <NotFound/>
    },
    {
        path: '/detalhes-lista-compras/:id',
        element: <DetalhesCompras/>
    }
]

const autenticado = false;

const loader = async () => {
    // const user = await getUser();
    if (autenticado) {
      return redirect("/");
    }
    return redirect("/login");
  };

 export default Routes
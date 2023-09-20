import React from "react"
import { Route, BrowserRouter, redirect } from "react-router-dom"

    // Páginas
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import NovoIngrediente from './pages/NovoIngrediente'
import EditarIngrediente from './pages/EditarIngrediente'
import Estoque from './pages/Estoque'
import Cadastro from "./pages/Cadastro"
import NotFound from "./pages/NotFound"
import NovaListaDeCompras from "./pages/NovaListaDeCompras"
import ListaDeCompras from "./pages/ListasDeCompras"
import Receitas from "./pages/Receitas"

    // path: 'caminho após o link'
    //element: <Página/>
const Routes = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: 'Novo Ingrediente',
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
        path: '*',
        element: <NotFound/>
    },
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
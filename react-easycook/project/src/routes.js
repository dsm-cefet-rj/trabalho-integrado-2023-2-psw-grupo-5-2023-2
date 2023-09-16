import React from "react"
import { Route, BrowserRouter } from "react-router-dom"

    // Páginas
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import NovoIngrediente from './pages/NovoIngrediente'
import EditarIngrediente from './pages/EditarIngrediente'
import Estoque from './pages/Estoque'

    // path: 'caminho após o link'
    //element: <Página/>
const Routes = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/Novo Ingrediente',
        element: <NovoIngrediente/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/editar-ingrediente',
        element: <EditarIngrediente/>
    },
    {
        path: '/estoque',
        element: <Estoque/>
    },
]

 export default Routes
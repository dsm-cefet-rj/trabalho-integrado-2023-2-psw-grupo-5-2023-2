import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.css'

//ROUTER
import { Route, BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"

// PÁGINAS
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import NovoIngrediente from './pages/NovoIngrediente'
import EditarIngrediente from './pages/EditarIngrediente'

const router = createBrowserRouter([
   {
    path: '/',
    element: <HomePage/>
   },
   {
    path: '/Novo Ingrediente',
    element: <NovoIngrediente/>
   }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(      /*   
              ESCOLHA RENDERIZAR A PÁGINA QUE QUER TESTAR ATÉ RESOLVERMOS O ROUTING   */
  <div>
    <RouterProvider router={router}/>
  </div>
 
)

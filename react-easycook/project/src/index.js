import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.scss'

//ROUTER
import { Route, BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"

// PÁGINAS
import Routes from './routes'

  // Movido para routes.js porque fica mais limpo
const router = createBrowserRouter(Routes)


// Teste sua página colocando o path após o link! Por exemplo:
//                  localhost:3000/login
// Consulte e adicione as páginas e caminhos no arquivo routes.js

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className=''>
    <RouterProvider router={router}/>
  </div>
)

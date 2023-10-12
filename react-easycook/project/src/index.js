import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.scss'

//ROUTER
import { Route, BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"

// PÁGINAS
import Routes from './routes'

import {Provider} from 'react-redux'
import store from './redux/store'

  // Movido para routes.js porque fica mais limpo
const router = createBrowserRouter(Routes)


// Teste sua página colocando o path após o link! Por exemplo:
//                  localhost:3000/login
// Consulte e adicione as páginas e caminhos no arquivo routes.js

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className=''>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </div>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.css'

// PÁGINAS
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import NovoIngrediente from './pages/NovoIngrediente'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div id='main'>
     <Login/>
     
  </div>
 
)

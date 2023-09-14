import React from 'react'
import ReactDOM from 'react-dom/client'
import NovoIngrediente from './pages/NovoIngrediente'
import '../src/styles/index.css'
import HomePage from './pages/HomePage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div onResize={ajustaTamanho()}>
     <HomePage/>
     
  </div>
 
)

var height = 0
var width = 0
function ajustaTamanho(){
  height = window.innerHeight
  width = window.innerWidth
}

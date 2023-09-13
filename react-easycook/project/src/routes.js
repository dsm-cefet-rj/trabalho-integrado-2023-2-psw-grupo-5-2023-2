import React from "react"
import { Route, BrowserRouter } from "react-router-dom"

import NovoIngrediente from './componentes/App'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { NovoIngrediente }  path="/Novo Ingrediente"/>
            
        </BrowserRouter>
    )
 }
 
 export default Routes
import React from "react"
import { Route, BrowserRouter } from "react-router-dom"

import NovoIngrediente from './pages/NovoIngrediente'
import Login from "./pages/Login"
import HomePage from "./pages/HomePage"

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { HomePage }  path="/home-page"/>
            <Route component = { Login }  path="/login"/>
            <Route component = { NovoIngrediente }  path="/novo-ingrediente"/>
        </BrowserRouter>
    )
 }
 
 export default Routes
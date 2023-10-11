import express from 'express'
const routes = express.Router()

import userController from '../src/controllers/userController.js'
import ingredientController from '../src/controllers/ingredientController.js'
import recipeController from '../src/controllers/recipeController.js'
import receitaSchema from '../models/receitaSchema.js'

//Rota Usuario
routes.post('/usuario', userController.create)
routes.get('/usuario', userController.read)
routes.delete('/usuario/:id', userController.deleteUser)
routes.patch('/usuario/:id', userController.update)

//Rota Ingrediente
routes.post('/ingrediente', ingredientController.create)
routes.get('/ingrediente', ingredientController.read)
routes.delete('/ingrediente/:id', ingredientController.deleteIngredient)
routes.patch('/ingrediente/:id', ingredientController.update)

//Rota Receita
routes.post('/receita', recipeController.create)
routes.get('/receita', recipeController.read)
routes.delete('/receita/:id', recipeController.deleteRecipe)
routes.patch('/receita/:id', recipeController.update)

export default routes
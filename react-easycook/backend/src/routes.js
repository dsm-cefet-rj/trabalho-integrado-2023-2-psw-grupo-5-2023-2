import express from 'express'
const routes = express.Router()

import userController from '../src/controllers/userController.js'
import ingredientController from '../src/controllers/ingredientController.js'

//Rota Usuario
routes.post('/usuario', userController.create)
routes.get('/usuario', userController.read)
routes.delete('/usuario/:id', userController.deleteUser)
routes.patch('/usuario/:id', userController.update)

//Rota Ingrediente
routes.get('/ingrediente', ingredientController.read)
routes.post('/ingrediente', ingredientController.create)
routes.delete('/ingrediente/:id', ingredientController.deleteIngredient)
routes.patch('/ingrediente/:id', ingredientController.update)

export default routes
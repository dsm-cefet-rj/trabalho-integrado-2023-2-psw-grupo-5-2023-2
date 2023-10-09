import express from 'express'
const routes = express.Router()

import userController from '../src/controllers/userController.js'

//Rota Usuario
routes.post('/usuario', userController.create)
routes.get('/usuario', userController.read)
routes.delete('/usuario/:id', userController.deleteUser)
routes.patch('/usuario/:id', userController.update)

export default routes
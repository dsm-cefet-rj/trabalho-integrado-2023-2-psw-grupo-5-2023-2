import express from 'express'
const routes = express.Router()

import userController from '../src/controllers/userController.js'

//Rota Usuario
routes.post('/usuario', userController.create)
routes.get('/usuario', userController.read)

export default routes
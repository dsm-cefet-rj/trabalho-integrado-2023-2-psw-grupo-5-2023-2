import express from 'express'
const app = express()

import routes from './routes.js'

import '../src/config/dbConfig.js'

app.use(express.json())
app.use(routes)

app.listen(3001)
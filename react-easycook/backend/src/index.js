import express from 'express'
const app = express()

import routes from '../src/routes.js'
import '../src/config/dbConfig.js'
import cors from 'cors'

app.use(cors())
app.use(express.json())
app.use(routes)



app.listen(3001)
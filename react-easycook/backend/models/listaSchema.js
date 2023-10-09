import mongoose from 'mongoose'
const Schema = mongoose.Schema
import ingredienteSchema from './ingredienteSchema'

const listaSchema = new Schema({
    nome: {type:String},
    id: {
        type:String,
        required: true
    },
    ingredientes: {type: {ingredienteSchema}}
})

export default mongoose.model('Lista', listaSchema)

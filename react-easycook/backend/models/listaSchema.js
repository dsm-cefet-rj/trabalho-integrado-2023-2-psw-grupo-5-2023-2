import mongoose from 'mongoose'
const Schema = mongoose.Schema
import ingredienteSchema from '../models/ingredienteSchema.js'

const listaSchema = new Schema({
    nome: {type:String},
    id: {
        type:String,
        required: true
    },
    ingredientes:  [{nome: {type:String},
        categoriaPrincipal: {type:String},
        medida: {type:String},
        qtd: {type:Number},
        variacao: {type:Number},
        descricao: {type:String},
        id: {
            type:String,
            required: true
        }}]
})

export default mongoose.model('Lista', listaSchema)

import mongoose from 'mongoose'
const Schema = mongoose.Schema
import ingredienteSchema from './ingredienteSchema'

const receitaSchema = new Schema({
    nome: {type:String},
    categoriaPrincipal: {type:String},
    id:{
        type:String,
        required: true
    },
    descricao: {type:String},
    ingredientes: {type: {ingredienteSchema}}
})


export default mongoose.model('Receita', receitaSchema)

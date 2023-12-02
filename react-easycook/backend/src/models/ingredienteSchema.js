import mongoose from 'mongoose'
import normalize from 'normalize-mongoose'
const Schema = mongoose.Schema

const ingredienteSchema = new Schema({
    nome: {
        type:String,
        required: true
    },
    categoriaPrincipal: {
        type:String,
        required: true
    },
    medida: {
        type:String,
        required: true
    },
    qtd: {
        type:Number,
        required: false,
        default: 0
    },
    variacao: {
        type:Number,
        required: true
    },
    descricao: {type:String},
})

ingredienteSchema.plugin(normalize)

export default mongoose.model('Ingrediente', ingredienteSchema)

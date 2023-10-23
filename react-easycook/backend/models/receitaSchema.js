import mongoose from 'mongoose'
import normalize from 'normalize-mongoose'
const Schema = mongoose.Schema

const receitaSchema = new Schema({
    nome: {
        type:String,
        required: true
    },
    categoriaPrincipal: {
        type:String,
        required: true
    },
    id:{
        type:String,
        required: true
    },
    descricao: {type:String},
    ingredientes:  [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingrediente'
    }]
    
})

receitaSchema.plugin(normalize)

export default mongoose.model('Receita', receitaSchema)

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const receitaSchema = new Schema({
    nome: {type:String},
    categoriaPrincipal: {type:String},
    id:{
        type:String,
        required: true
    },
    descricao: {type:String},
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

export default mongoose.model('Receita', receitaSchema)

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    id: {type:String},
    userNome: {type:String},
    userEmail: {type:String},
    userCpf: {type:String},
    userPassword: {type:String},
    userDataNasc: {type:String}
})

const ingredienteSchema = new Schema({
    nome: {type:String},
    categoriaPrincipal: {type:String},
    medida: {type:String},
    qtd: {type:String},
    variacao: {type:String},
    descricao: {type:String},
    id: {type:String}
})

const receitaSchema = new Schema({
    nome: {type:String},
    categoriaPrincipal: {type:String},
    id: {type:String},
    descricao: {type:String},
    ingredientes: {type: ingredienteSchema}
})

const listaSchema({
    nome: {type:String},
    id: {type:String},
    ingredientes: {type: ingredienteSchema}
})
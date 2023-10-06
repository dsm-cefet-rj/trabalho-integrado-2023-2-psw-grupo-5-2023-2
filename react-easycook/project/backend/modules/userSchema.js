import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    id: {
        type:String,
        required: true
    },
    userNome: {type:String},
    userEmail: {type:String},
    userCpf: {type:String},
    userPassword: {type:String},
    userDataNasc: {type:Date},
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('User', userSchema)

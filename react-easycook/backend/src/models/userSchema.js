import mongoose from 'mongoose'
import normalize from 'normalize-mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    id: {
        type:String,
        required: true
    },
    userNome: {
        type:String,
        required: true
    },
    userEmail: {
        type:String,
        required: true
    },
    userCpf: {
        type:String,
        required: true
    },
    userPassword: {
        type:String,
        required: true
    },
    userDataNasc: {
        type:Date,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

userSchema.plugin(normalize)

export default mongoose.model('Usuario', userSchema)

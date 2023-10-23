import mongoose from 'mongoose'
import normalize from 'normalize-mongoose'
const Schema = mongoose.Schema

const listaSchema = new Schema({
    nome: {
        type:String,
        required: true
    },
    id: {
        type:String,
        required: true
    },
    ingredientes:  [{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Ingrediente'   
    }]
})

listaSchema.plugin(normalize)

export default mongoose.model('Lista', listaSchema)

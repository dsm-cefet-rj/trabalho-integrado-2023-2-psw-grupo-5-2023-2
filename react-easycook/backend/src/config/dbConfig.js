import mongoose from 'mongoose'

const dbConfig = 'mongodb+srv://noemicho:EQj9Regtb1pTE1vZ@cluster0.bynfaw4.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export default connection

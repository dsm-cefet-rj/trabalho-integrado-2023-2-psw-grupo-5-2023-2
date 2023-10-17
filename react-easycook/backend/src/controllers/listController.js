import listaSchema from "../../models/listaSchema.js"

async function create(request, response){
    const {nome,
    id,
    ingredientes} = request.body

    if(!nome || !id || !ingredientes){
        response.status(404).json({error: 'preencha os campos necessarios'})
    }

    const listCreated = await listaSchema.create({
        nome,
        id,
        ingredientes
    })
    return response.json(listCreated)
}

async function deleteList(request, response){
    const {id} = request.params

    const listDeleted = await listaSchema.findOneAndDelete({_id: id})

    if(listDeleted){
        return response.json(listDeleted)
    }
    return response.status(401).json({error: 'não foi encontrado o registro para deletar'})
}

async function read(request, response){
    const List = await listaSchema.find()
    return response.json(List)
}

export default {create, deleteList, read}
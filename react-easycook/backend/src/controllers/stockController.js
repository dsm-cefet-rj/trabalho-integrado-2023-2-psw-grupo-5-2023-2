import ingredienteSchema from "../models/ingredienteSchema.js"
import estoqueSchema from "../models/estoqueSchema.js"

async function read(request, response) {
    const userId = request.params.userId
    console.log(userId)
    try{
        const estoque = await estoqueSchema.findOne({user: userId})
        .populate({
            path: 'ingredientes',
            populate: {
                path: 'ingrediente'
            }
        });

        if(!estoque){
            return response.status(404).json({error: 'estoque não encontrado para este usuário'})
        }
        //const ingredientesEstoque = await ingredienteSchema.find({_id: { $in: estoque.ingredientes }})
        response.status(200).json(ingredientesEstoque)
        console.log(estoque)
    } catch(error){
        console.error(error)
        response.status(500).json({error: 'erro ao obter ingredientes do estoque'})
    }
    
    
  }

async function readAll(request, response) {
    let estoque;
    try {
        estoque = await estoqueSchema.find()
        .populate({
            path: 'ingredientes',
            populate: {
                path: 'ingrediente'
            }
        })
        .populate('user');
    } catch (error) {
        return response.status(500);
    }
    return response.status(200).json(estoque);

}

  export default {read, readAll}
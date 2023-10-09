import receitaSchema from '../../models/receitaSchema.js'

async function update(request, response){
    const {id} = request.params
    const {ingredientes} = request.body

    const recipe = await receitaSchema.findOne({_id:id})

    if(ingredientes){
        recipe.ingredientes = ingredientes

        await recipe.save()
    }
    return response.json(recipe)
}


async function create(request, response){
    const {nome,
    categoriaPrincipal,
    id,
    descricao,
    ingredientes} = request.body

    if(!nome || !id || !categoriaPrincipal || !ingredientes){
        response.status(404).json({error: 'preencha os campos necessarios'})
    }

    const recipeCreated = await receitaSchema.create({
        nome,
        categoriaPrincipal,
        id,
        descricao,
        ingredientes
    })
    return response.json(recipeCreated)
}



export default {update, create}
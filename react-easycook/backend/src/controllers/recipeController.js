import receitaSchema from '../../models/receitaSchema.js'


/*async function update(request, response){
    const {id} = request.params
    const {ingredientes} = request.body
    const {descricao} = request.body
    const {nome} = request.body
    const {categoriaPrincipal} = request.body

    const recipe = await receitaSchema.findOne({_id:id})

    if(ingredientes){
        recipe.descricao = descricao
        if(descricao==""){
            recipe.descricao = ""
        }
        recipe.nome = nome
        recipe.categoriaPrincipal = categoriaPrincipal
        await recipe.save()
    }
    return response.json(recipe)
}
*/

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

async function deleteRecipe(request, response){
    const {id} = request.params

    const recipeDeleted = await receitaSchema.findOneAndDelete({_id: id})

    if(recipeDeleted){
        return response.json(recipeDeleted)
    }
    return response.status(401).json({error: 'não foi encontrado o registro para deletar'})
}

async function read(request, response){
    const {id} = request.params
    let err
    try{
        const recipeList = await receitaSchema.findById({_id: id}).populate('ingredientes')
        if(recipeList != null ){
            return response.status(200).json(recipeList)
        }
    }
    catch(errParam){
        response.status(404).json({})
    }
}

async function readAll(request, response){
    const RecipeGroup = await receitaSchema.find()
    return response.json(RecipeGroup)
}

export default {create, deleteRecipe, read, readAll}
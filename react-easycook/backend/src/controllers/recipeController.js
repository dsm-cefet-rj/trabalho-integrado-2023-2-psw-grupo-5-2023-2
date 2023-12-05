import monitoracaoIngredienteSchema from "../models/monitoracaoIngredienteSchema.js";
import receitaSchema from "../models/receitaSchema.js";

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

async function create(request, response) {
  const { nome, categoriaPrincipal, id, descricao, ingredientes } =
    request.body;

  if (!nome || !id || !categoriaPrincipal) {
    response.status(404).json({ error: "preencha os campos necessarios" });
  }

  const recipeCreated = await receitaSchema.create({
    nome,
    categoriaPrincipal,
    id,
    descricao,
    ingredientes: ingredientes,
  });
  return response.json(recipeCreated);
}

async function deleteRecipe(request, response) {
  const { id } = request.params;

  const recipeDeleted = await receitaSchema.findOneAndDelete({ _id: id });

  if (recipeDeleted) {
    return response.json(recipeDeleted);
  }
  return response
    .status(401)
    .json({ error: "nÃ£o foi encontrado o registro para deletar" });
}

async function read(request, response) {
  const { id } = request.params;
  let err;
  try {
    const recipeList = await receitaSchema
      .findById({ _id: id })
      .populate("ingredientes");
    if (recipeList != null) {
      return response.status(200).json(recipeList);
    }
  } catch (errParam) {
    response.status(404).json({});
  }
}

async function readAll(request, response) {
  const RecipeGroup = await receitaSchema.find().populate("ingredientes");
  return response.json(RecipeGroup);
}

async function readUserRecipes(request, response) {
  const userId = request.params.id;

  let recipeList = await receitaSchema.find({ ownerUser: userId });

  for (let r of recipeList) {
    console.log(r);
    r.ingredientes = await monitoracaoIngredienteSchema
      .find({ owner: r.id })
      .populate("ingrediente");
  }

  return response.json(recipeList);
}

async function newUserRecipe(request, response) {
  const userId = request.params.id;
  let ingredientes = request.body.ingredientes;

  console.log(ingredientes);

  if (!request.body.nome) {
    return response.status(400).json("A receita precisa de um nome");
  }

  let lst = await receitaSchema.findOne({ nome: request.body.nome });

  if (lst.nome === request.body.nome) {
    return response
      .status(400)
      .json({ message: "Já existe uma receita com esse nome" });
  }

  if (ingredientes.length > 0) {
    const receita = await receitaSchema.create({
      nome: request.body.nome,
      categoriaPrincipal: request.body.categoriaPrincipal,
      ownerUser: userId,
      descricao: request.body.descricao ? request.body.descricao : "",
    });
    for (const i of ingredientes) {
      i.owner = receita.id;
      i.ownerType = "Receita";

      // console.log("ingrediente: " + JSON.stringify(i));

      const c = await monitoracaoIngredienteSchema.create(i);

      // console.log(c);
    }
    return response.status(200).json({ message: "receita atualizada" });
  } else {
    return response
      .status(400)
      .json({ message: "Não havia ingrediente na receita." });
  }
}

export default {
  create,
  deleteRecipe,
  read,
  readAll,
  readUserRecipes,
  newUserRecipe,
};

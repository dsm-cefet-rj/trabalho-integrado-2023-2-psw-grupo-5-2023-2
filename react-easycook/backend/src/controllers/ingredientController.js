import ingredienteSchema from "../models/receitaSchema.js";

async function read(request, response) {
  const ingredientList = await ingredienteSchema.find();
  return response.json(ingredientList);
}

async function readOne(request, response) {
  const { id } = request.params;
  let err;
  try {
    const ing = await ingredienteSchema.findById({ _id: id });
    if (ing != null) {
      return response.status(200).json(ing);
    }
  } catch (errParam) {
    response.status(404).json({});
  }
}

async function create(request, response) {
  const { nome, categoriaPrincipal, medida, qtd, variacao, descricao, id } =
    request.body;

  if (!nome || !id || !categoriaPrincipal || !medida || !qtd || !variacao) {
    response.status(404).json({ error: "preencha os campos necessarios" });
  }

  const ingredientCreated = await ingredienteSchema.create({
    nome,
    categoriaPrincipal,
    medida,
    qtd,
    variacao,
    descricao,
    id,
  });
  return response.json(ingredientCreated);
}

async function deleteIngredient(request, response) {
  const { id } = request.params;

  const ingredientDeleted = await ingredienteSchema.findOneAndDelete({
    _id: id,
  });

  if (ingredientDeleted) {
    return response.json(ingredientDeleted);
  }
  return response
    .status(401)
    .json({ error: "não foi encontrado o registro para deletar" });
}

async function update(request, response) {
  const { id } = request.params;
  const updateData = request.body;

  try {
    const updatedIngredient = await ingredienteSchema.findOneAndUpdate(
      { _id: id },
      updateData,
      { new: true }
    );

    if (updatedIngredient) {
      return response.json(updatedIngredient);
    }
    return response
      .status(404)
      .json({ error: "não foi encontrado o registro para atualizar" });
  } catch (error) {
    return response.status(500).json({ error: "erro interno do servidor" });
  }
}

export default { read, create, deleteIngredient, update, readOne };

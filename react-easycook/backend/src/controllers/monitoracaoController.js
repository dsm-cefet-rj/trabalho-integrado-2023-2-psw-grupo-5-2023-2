import monitoracaomonitoracaoIngredienteSchema from "../models/monitoracaomonitoracaoIngredienteSchema";

async function read(request, response) {
  const list = await monitoracaoIngredienteSchema.find();
  return response.json(list);
}

async function readOne(request, response) {
  const { id } = request.params;
  let err;
  try {
    const obj = await monitoracaoIngredienteSchema.findById({ _id: id });
    if (obj != null) {
      return response.status(200).json(obj);
    }
  } catch (errParam) {
    response.status(404).json({});
  }
}

async function create(request, response) {
  const { ingrediente, qtd, owner, ownerType } =
    request.body;

  if (!ingrediente || !qtd || !ownerType || !owner) {
    response.status(404).json({ error: "preencha os campos necessarios" });
  }

  const ingredientCreated = await monitoracaoIngredienteSchema.create({
    ingrediente,
    qtd,
    ownerType,
    owner,
  });
  return response.json(ingredientCreated);
}

async function remove(request, response) {
  const { id } = request.params;

  const obj = await monitoracaoIngredienteSchema.findOneAndDelete({
    _id: id,
  });

  if (obj) {
    return response.json(obj);
  }
  return response
    .status(401)
    .json({ error: "não foi encontrado o registro para deletar" });
}

async function update(request, response) {
  const { id } = request.params;
  const updateData = request.body;

  try {
    const updatedObj = await monitoracaoIngredienteSchema.findOneAndUpdate(
      { _id: id },
      updateData,
      { new: true }
    );

    if (updatedObj) {
      return response.json(updatedObj);
    }
    return response
      .status(404)
      .json({ error: "não foi encontrado o registro para atualizar" });
  } catch (error) {
      return response.status(500).json({ error: "erro interno do servidor" });
    }
}

export default { read, create, deleteIngredient, update, readOne };

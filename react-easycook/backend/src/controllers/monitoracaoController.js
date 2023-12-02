import estoqueSchema from "../models/estoqueSchema.js";
import listaSchema from "../models/listaSchema.js";
import monitoracaoIngredienteSchema from "../models/monitoracaoIngredienteSchema.js";
import userSchema from "../models/userSchema.js";

async function read(request, response) {
  const list = await monitoracaoIngredienteSchema.find();
  return response.json(list);
}

async function readStockFromUserId(request, response) {
  const userId = request.params.userId;
  const user = await userSchema.findById(userId);
  const estoqueId = user.estoque;
  const list = await monitoracaoIngredienteSchema.find({owner: estoqueId}).exec();
  return response.json(list);
}

async function readFromRecipeFromUserId(request, response) {
  const userId = request.params.userId;
  const user = await userSchema.findById(userId);
  const estoqueId = user.estoque;
  const list = await monitoracaoIngredienteSchema.find({owner: estoqueId}).exec();
  return response.json(list);
}

async function readListsFromUserId(request, response) {
  const userId = request.params.userId;
  const user = await userSchema.findById(userId);
  const estoqueId = user.estoque;
  const list = await monitoracaoIngredienteSchema.find({owner: estoqueId}).exec();
  return response.json(list);
}

async function addMonitoracaoToStockFromUserId(request, response) {
  const userId = request.params.userId;
  const user = await userSchema.findById(userId);
  const estoqueId = user.estoque;
  const list = await monitoracaoIngredienteSchema.create({
    ingrediente: request.body.ingrediente,
    qtd: request.body.qtd,
    owner: estoqueId,
    ownerType: request.body.ownerType,
  });
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
    return response.status(404).json({ error: "preencha os campos necessarios" });
  }

  let ingredientCreated = await monitoracaoIngredienteSchema.create({
    ingrediente,
    qtd,
    ownerType,
    owner,
  });

  if (ownerType === "Lista") {
    var list = await listaSchema.findById(owner);
    list.ingredientes.push(ingredientCreated._id);

    try {
      let updatingLista = await listaSchema.findByIdAndUpdate(
        owner,
        { ingredientes: list.ingredientes},
        { new: false }
        );
    } catch (error) {
      console.log(error + "// erro adicionando monitoracao a lista");
    }
    return response.json(ingredientCreated);
  } 
  else if (ownerType === "Estoque") {
    var estoque = await estoqueSchema.findById(owner);
    estoque.ingredientes.push(ingredientCreated._id);

    try {
      let updatingEstoque = await estoqueSchema.findByIdAndUpdate(
        owner,
        { ingredientes: estoque.ingredientes},
        { new: false }
        );
    } catch (error) {
      console.log(error + "// erro adicionando monitoracao ao estoque");
    }
    return response.json(ingredientCreated);
  }
  else {
    return response.status(404).json({ error: "preencha os campos necessarios" });
  }
  
}

async function remove(request, response) {
  const { id } = request.params;
  // trabalhar exclusão lógica ao invés da física?
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
      { new: false }
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

export default { read, create, remove, update, readOne };

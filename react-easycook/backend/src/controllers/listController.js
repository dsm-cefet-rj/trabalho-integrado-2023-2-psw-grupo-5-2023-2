import ingredienteSchema from "../models/ingredienteSchema.js";
import listaSchema from "../models/listaSchema.js";

async function create(request, response) {
  const { nome, ingredientes } = request.body;

  if (!nome) {
    response.status(404).json({ error: "preencha os campos necessarios" });
  }

  const listCreated = await listaSchema.create({
    nome,
    ingredientes,
  });
  return response.json(listCreated);
}

async function deleteList(request, response) {
  const { id } = request.params;

  const listDeleted = await listaSchema.findOneAndDelete({ _id: id });

  if (listDeleted) {
    return response.json(listDeleted);
  }
  return response
    .status(401)
    .json({ error: "não foi encontrado o registro para deletar" });
}

async function read(request, response) {
  const { id } = request.params;
  let err;
  try {
    const list = await listaSchema
      .findById({ _id: id })
      .populate({
        path: 'ingredientes',
        populate: {
          path: 'ingrediente'
        }
      });
    if (list != null) {
      return response.status(200).json(list);
    }
  } catch (errParam) {
    response.status(404).json({});
  }
}

async function readAll(request, response) {
  const listGroup = await listaSchema.find()
    .populate({
      path: 'ingredientes',
      populate: {
        path: 'ingrediente'
      }
    });
  return response.json(listGroup);
}

async function readUserLists(request, response) {
  const userid = request.params.id;
  if (!userid) { response.status(500);}
  console.log("oba");
  console.log(userid);
  const listsList = await listaSchema.find({ownerUser: userid}).populate("ingredientes").exec();

  return response.status(200).json(listsList);
}

async function update(request, response) {
  const { id } = request.params;
  const updateData = request.body;

  try {
    const updatedList = await listaSchema.findOneAndUpdate(
      { _id: id },
      updateData,
      { new: true }
    );

    if (updatedList) {
      return response.json(updatedList);
    }
    return response
      .status(404)
      .json({ error: "não foi encontrado o registro para atualizar" });
  } catch (error) {
    return response.status(500).json({ error: "erro interno do servidor" });
  }
}

export default { create, deleteList, update, read, readAll, readUserLists };

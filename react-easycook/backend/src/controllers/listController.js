import ingredienteSchema from "../models/ingredienteSchema.js";
import listaSchema from "../models/listaSchema.js";
import monitoracaoIngredienteSchema from "../models/monitoracaoIngredienteSchema.js";

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
    let list = await listaSchema.findById({ _id: id }).populate({
      path: "ingredientes",
      populate: {
        path: "ingrediente",
      },
    });

    const monitoracoes = await monitoracaoIngredienteSchema.find({ owner: id });

    list.ingredientes = monitoracoes;

    if (list != null) {
      return response.status(200).json(list);
    }
  } catch (errParam) {
    response.status(404).json({});
  }
}

async function readAll(request, response) {
  const listGroup = await listaSchema.find().populate({
    path: "ingredientes",
    populate: {
      path: "ingrediente",
    },
  });
  return response.json(listGroup);
}

async function readUserLists(request, response) {
  const userid = request.params.id;
  if (!userid) {
    response.status(400).json("Sem userId");
  }

  console.log(userid);
  let listsList = await listaSchema.find({ ownerUser: userid });
  console.log(listsList[0]);
  for (let l of listsList) {
    console.log(l);
    l.ingredientes = await monitoracaoIngredienteSchema.find({ owner: l.id });
  }

  return response.status(200).json(listsList);
}

// Revisar
async function newUserList(request, response) {
  const userId = request.params.id;
  let ingredientes = request.body.ingredientes;

  if (!request.body.nome) {
    return response.status(400).json("A lista precisa de um nome");
  }

  let lst = await listaSchema.find({ nome: request.body.nome });

  if (lst.nome === request.body.nome) {
    return response
      .status(400)
      .json({ message: "Já existe uma lista com esse nome" });
  }

  if (ingredientes.length > 0) {
    const lista = await listaSchema.create({
      nome: request.body.nome,
      ownerUser: userId,
      descricao: request.body.descricao ? request.body.descricao : "",
    });

    for (const i of ingredientes) {
      i.owner = lista.id;
      i.ownerType = "Lista";

      console.log("ingrediente: " + JSON.stringify(i));

      const c = await monitoracaoIngredienteSchema.create(i);

      console.log(c);
    }
    return response.status(200).json({ message: "Lista atualizada" });
  } else {
    return response
      .status(400)
      .json({ message: "Não havia ingrediente na lista." });
  }
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

export default {
  create,
  deleteList,
  update,
  read,
  readAll,
  readUserLists,
  newUserList,
};

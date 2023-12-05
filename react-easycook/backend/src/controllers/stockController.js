import ingredienteSchema from "../models/ingredienteSchema.js";
import estoqueSchema from "../models/estoqueSchema.js";
import monitoracaoIngredienteSchema from "../models/monitoracaoIngredienteSchema.js";
import userSchema from "../models/userSchema.js";

async function read(request, response) {
  const userId = request.params.userId;
  console.log(userId);
  try {
    const estoque = await estoqueSchema.findOne({ user: userId }).populate({
      path: "ingredientes",
      populate: {
        path: "ingrediente",
      },
    });
    console.log(estoque.id);

    if (!estoque) {
      return response
        .status(404)
        .json({ error: "estoque não encontrado para este usuário" });
    }
    //const ingredientesEstoque = await ingredienteSchema.find({_id: { $in: estoque.ingredientes }})

    const ingredientesEstoque = await monitoracaoIngredienteSchema
      .find({ owner: estoque.id, active: true })
      .populate("ingrediente");
    response.status(200).json(ingredientesEstoque);
    console.log(ingredientesEstoque);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({ error: "erro ao obter ingredientes do estoque" });
  }
}

async function updateStock(request, response) {
  const userId = request.params.userId;
  let ingredientes = request.body.ingredientes;

  const user = await userSchema.find({ _id: userId });

  const owner = user[0].estoque;

  const a = await monitoracaoIngredienteSchema.updateMany(
    {},
    { active: false }
  );

  if (ingredientes.length > 0) {
    for (const i of ingredientes) {
      i.owner = owner;
      console.log(i);
      let mon = await monitoracaoIngredienteSchema.find({
        ingrediente: i.ingrediente,
        owner: owner,
      });
      console.log("mon: " + mon);

      if (mon === undefined || mon === null || mon === "" || mon.length === 0) {
        console.log("MON NÃO EXISTE");
        const c = await monitoracaoIngredienteSchema.create(i);
      } else {
        console.log("MON EXISTE");

        const c = await monitoracaoIngredienteSchema.findOneAndUpdate(
          { ingrediente: i.ingrediente, owner: owner },
          { active: true },
          { new: false }
        );

        console.log(c);
      }
    }
    return response.status(200).json({ message: "Ingredientes atualizados" });
  } else {
    return response.status(200).json({ message: "Ingredientes removidos" });
  }
}

async function readAll(request, response) {
  let estoque;
  try {
    estoque = await estoqueSchema
      .find()
      .populate({
        path: "ingredientes",
        populate: {
          path: "ingrediente",
        },
      })
      .populate("user");
  } catch (error) {
    return response.status(500);
  }
  return response.status(200).json(estoque);
}

export default { read, readAll, updateStock };

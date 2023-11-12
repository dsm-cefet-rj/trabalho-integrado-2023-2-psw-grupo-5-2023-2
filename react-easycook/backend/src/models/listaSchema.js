import mongoose from "mongoose";
import normalize from "normalize-mongoose";
import Ingrediente from "../models/ingredienteSchema.js";
const Schema = mongoose.Schema;

const listaSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  ingredientes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Monitoracao",
    },
  ],
});

listaSchema.plugin(normalize);

export default mongoose.model("Lista", listaSchema);

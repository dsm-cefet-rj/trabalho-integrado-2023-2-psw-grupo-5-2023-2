import mongoose from "mongoose";
import normalize from "normalize-mongoose";
const Schema = mongoose.Schema;

const monitoracaoIngredienteSchema = new Schema({
  ingrediente: {
    type: Schema.Types.ObjectId,
    ref: "Ingrediente",
  },
  qtd: {
    type: Number,
    required: false,
    default: 0,
  },
  owner: {
    type: Schema.Types.ObjectId,
    refPath: "ownerType",
    required: true,
  },
  ownerType: {
    type: String,
    enum: ["Estoque", "Lista", "Receita"],
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

monitoracaoIngredienteSchema.plugin(normalize);

export default mongoose.model("Monitoracao", monitoracaoIngredienteSchema);

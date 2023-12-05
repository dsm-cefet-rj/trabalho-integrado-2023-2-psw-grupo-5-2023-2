import mongoose from "mongoose";
import normalize from "normalize-mongoose";
const Schema = mongoose.Schema;

const estoqueSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
  ingredientes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Monitoracao",
    },
  ],
});

estoqueSchema.plugin(normalize);

export default mongoose.model("Estoque", estoqueSchema);

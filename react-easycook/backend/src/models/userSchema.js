import mongoose from "mongoose";
import normalize from "normalize-mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    min: 6,
    max: 40,
    required: true,
  },
  estoque: {
    type: Schema.Types.ObjectId,
    ref: "Estoque",
  },
  receitas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Receita",
    },
  ],
  listas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lista",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.plugin(normalize);

export default mongoose.model("Usuario", userSchema);

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema({
  // _id
  idApp: {
    type: String,
    required: true, // idApp es un campo obligatorio
  },
  idItem: {
    type: String,
    required: true, // idItem es un campo obligatorio
  },
  usuario: {
    type: String,
    required: true, // usuario es un campo obligatorio
  },
  enRespuestaA: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comentario", // Aquí especificas el nombre del modelo al que se hace referencia (Comentario) // si required es true no acepta null
  },
  comentario: {
    type: String,
    required: true, // comentario es un campo obligatorio
  },
  timestamp: {
    type: Number,
    required: true, // timestamp es un campo obligatorio
    default: Date.now, // Puedes establecer un valor predeterminado como Date.now
  },
});

const Comentario = mongoose.model("Comentario", ComentarioSchema);

export { Comentario };

import { Router } from "express";
import { getComentario, getComentarios, createComentario, deleteComentario, updateComentario } from "../controller/comentarios.js";

const router = Router();

// Here we are in: /api/comentarios

// GET /api/comentarios
router.get("/:id", getComentario); // Obtener 1 comentario
router.put("/:id", updateComentario); // Actualizar 1 comentario
router.get("/", getComentarios); // Obtener todos los comentarios
router.post("/", createComentario); // Enviar 1 comentario
router.delete("/:id", deleteComentario); // Eliminar 1 comentario

export default router;

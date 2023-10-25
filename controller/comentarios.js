// /api/comentarios
import { Comentario } from "../models/comentarioModel.js";
import mongoose from "mongoose";

// GET: 1
const getComentario = async (req, res) => {
  const comentarioId = req.params.id;

  // Validar si comentarioId es un ObjectId válido
  if (!mongoose.Types.ObjectId.isValid(comentarioId)) {
    return res.status(400).json({ message: "ID de comentario no válido" });
  }

  // Si el comentarioId es un ObjectId válido, buscar el comentario
  try {
    const comentario = await Comentario.findById(comentarioId);

    if (!comentario) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }

    res.json(comentario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: all
const getComentarios = async (req, res) => {
  console.log("GET /api/comentarios");
  try {
    const { idApp } = req.query; // idApp -> proyecto en el que trabaja cada grupo
    const { idItem } = req.query; // idItem -> item en el que trabaja cada grupo
    // Define un objeto de filtro basado en el query
    const filtro = {};
    if (idApp) {
      filtro.idApp = idApp;
    }
    if (idItem) {
      filtro.idItem = idItem;
    }

    // Realiza la consulta con el filtro
    const comentarios = await Comentario.find(filtro);

    console.log("comentarios:", comentarios);
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST: create 1
const createComentario = async (req, res) => {
  console.log("POST /api/comentarios");
  const comentario = req.body;
  console.log("comentario:", comentario);
  const newComentario = new Comentario(comentario);
  try {
    await newComentario.save();
    res.status(201).json(newComentario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE: 1
const deleteComentario = async (req, res) => {
  const comentarioId = req.params.id;

  // Validar si comentarioId es un ObjectId válido
  if (!mongoose.Types.ObjectId.isValid(comentarioId)) {
    return res.status(400).json({ message: "ID de comentario no válido" });
  }

  // Si el comentarioId es un ObjectId válido, buscar el comentario
  try {
    const comentario = await Comentario.findById(comentarioId);

    if (!comentario) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }
    const { _id } = comentario;
    await Comentario.deleteOne({ _id });
    res.json({ _id, message: "Comentario eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getComentario, getComentarios, createComentario, deleteComentario };

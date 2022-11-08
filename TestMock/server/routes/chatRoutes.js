import { Router } from "express";

import ChatMongoDAO from "../persistencia/daos/chatMongoDAO.js";

const chatRoutes = Router();
const chatMongoDao = new ChatMongoDAO();

chatRoutes.get("/", async (req, res) => {
  const chat = await chatMongoDao.normalizeChat();
  console.log(chat);
  if (chat) {
    res.status(200).json(chat);
  } else {
    res.status(200).json({ message: "No existen chats" });
  }
});

chatRoutes.post("/", async (req, res) => {
  const chat = req.body;
  const respuesta = await chatMongoDao.saveChat(chat);
  res.json({ response: "Mensaje guardado con exito", chat: respuesta });
});

chatRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await chatMongoDao.delete(id);
  res.json("Se elimino correctamente");
});

export default chatRoutes;

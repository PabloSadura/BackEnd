import { Router } from "express";
import ChatMongoDAO from "../persistencia/daos/chatMongoDAO.js";

const chatRoutes = Router();
const chatMongoDao = new ChatMongoDAO();

chatRoutes.get("/", async (req, res) => {
  const chat = await chatMongoDao.getAll();
  if (chat.length !== 0) {
    res.json(chat);
  } else {
    res.json({ response: "No hay mensajes" });
  }
});

chatRoutes.post("/", async (req, res) => {
  const chat = req.body;
  const respuesta = await chatMongoDao.saveChat(chat);
  res.json({ response: "Mensaje guardado con exito", chat: respuesta });
});

export default chatRoutes;

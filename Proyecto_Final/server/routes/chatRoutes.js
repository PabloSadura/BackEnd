import Chat from "../chatClass.js";
import { json, Router } from "express";
const chatRouter = Router();
const chat = new Chat();

chatRouter.get("/", async (req, res) => {
  try {
    const message = await chat.getMessage();
    if (message.length !== 0) {
      res.json(message);
    } else {
      res.json({ message: "No exiten mensajes" });
    }
  } catch (error) {
    console.log("Error:", error);
  }
});

chatRouter.post("/", async (req, res) => {
  try {
    const msj = req.body;
    const data = await chat.setMessage(msj);
    res.json(data);
  } catch (error) {
    console.log("Error:", error);
  }
});
chatRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await chat.deleteMessage(Number(id));
    res.json({ message: "Se borro el chat correctamente", chat: data });
  } catch (error) {
    console.log("Error:", error);
  }
});

export default chatRouter;

import { Server as IOServer } from "socket.io";
import ChatServices from "../services/chat.services.js";
const chatServices = new ChatServices();

export default function socketIO(httpServer) {
  const io = new IOServer(httpServer);
  io.on("connection", (socket) => {
    console.log("Usuario conectado a socket");

    socket.on("chatMessage", async (msg) => {
      await chatServices.newChat(msg);
      io.emit("chatMessage", msg);
    });
  });
}

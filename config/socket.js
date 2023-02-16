import { Server as IOServer } from "socket.io";

export default function socketIO(httpServer) {
  const io = new IOServer(httpServer);
  io.on("connection", (socket) => {
    console.log("Usuario conectado a socket");

    socket.on("chatMessage", (msg) => {
      io.emit("chatMessage", msg);
    });
  });
}

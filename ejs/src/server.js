const express = require("express");
const ejsRouter = require("../routes/ejsRoutes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", ejsRouter);

app.set("views", "./src/views");
app.set("view engine", "ejs");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Escuchando puerto ${PORT}`);
});

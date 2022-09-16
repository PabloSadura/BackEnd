const express = require("express");
const routerPug = require("../routes/routerPug");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routerPug);

app.set("views", "./src/views");
app.set("view engine", "pug");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Escuchando puerto ${PORT}`);
});

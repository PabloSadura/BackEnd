const { log } = require("console");
const http = require("http");

const mensaje = () => {
  const hora = new Date().getHours();
  if (hora >= 6 && hora <= 13) {
    return "Buenos dias";
  } else if (hora >= 13 && hora <= 20) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
};

const app = http.createServer((req, res) => {
  res.end(mensaje());
});

const PORT = 8082;

app.listen(PORT, () => {
  console.log("Escuchando el port");
});

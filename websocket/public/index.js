const socketClient = io();

const formulario = document.getElementById("formulario");
const inputInfo = document.getElementById("info");
const lista = document.getElementById("lista");
const products = document.getElementById("products");

formulario.onsubmit = (e) => {
  e.preventDefault();
  const info = inputInfo.value;
  socketClient.emit("mensaje", info);
  inputInfo.value = "";
};

socketClient.on("mensajeArray", (mensajesArray) => {
  generarTexto(mensajesArray);
});

function generarTexto(mensaje) {
  const inner = mensaje.map((el) => {
    return `<li>${el}</li>`.join(" ");
  });
  lista.innerHTML = inner;
}

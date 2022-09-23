const socketClient = io();

const messageBox = document.getElementById("massage-box");
const message = document.getElementById("message");
const email = document.getElementById("email");
const chat = document.getElementById("chat-table");
const cards = document.getElementById("cards");
const formproduct = document.getElementById("form-product");
const title = document.getElementById("title");
const price = document.getElementById("price");
const thumbnail = document.getElementById("thumbnail");
let id = 1;
// genero un chat desde un form
messageBox.onsubmit = (e) => {
  e.preventDefault();
  socketClient.emit("mensaje", {
    fecha: new Date(),
    email: email.value,
    mensaje: message.value,
  });
  message.value = "";
  email.value = "";
};
socketClient.on("bienvenida", (data) => {
  generateChat(data);
});
socketClient.on("respuesta", (data) => {
  console.log(data);
  generateChat(data);
});

formproduct.onsubmit = (e) => {
  e.preventDefault();
  socketClient.emit("newProduct", {
    id: id++,
    title: title.value,
    price: parseFloat(price.value),
    thumbnail: thumbnail.value,
  });
  title.value = "";
  price.value = null;
  thumbnail.value = "";
};

socketClient.on("totalProducts", (data) => {
  generateProd(data);
});

socketClient.on("respuestaProd", (data) => {
  console.log(data);
  generateProd(...data);
});

// socketClient.on("upload", (prod) => {
//   console.log(prod);
//   generateProd(...prod);
// });
// socketClient.on("products", (data) => {
//   generateProd(...data);
// });

function generateChat(msj) {
  const inner = msj
    .map((el) => {
      return `<tr>
    <td>${el.fecha}</td>
    <td>${el.email}</td>
    <td>${el.mensaje}</td>
  </tr>`;
    })
    .join(" ");
  chat.innerHTML = inner;
}

function generateProd(product) {
  console.log(product);
  const inner = product
    .map((el) => {
      return `<tr>
                <th>${el.id}</th>
                <td>${el.title}</td>
                <td>$ ${el.price}</td>
                <td><a href="">Comprar</a></td>
              </tr>`;
    })
    .join(" ");
  cards.innerHTML = inner;
}
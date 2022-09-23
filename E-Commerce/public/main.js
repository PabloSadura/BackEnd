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
socketClient.on("products", (data) => {
  generateCards(...data);
});

formproduct.onsubmit = (e) => {
  e.preventDefault();
  socketClient.emit("newProduct", {
    title: title.value,
    price: price.value,
    thumbnail: thumbnail.value,
  });
  title.value = "";
  price.value = null;
  thumbnail.value = "";
};

function generateCards(prod) {
  console.log(prod);
  const prodInner = prod
    .map((el) => {
      return `<div class="card p-2 mb-2 " style="width: 18rem">
      <div class="text-center">
      <img src="${el.thumbnail}" class="card-img-top w-75" alt="..." style="height: 15rem"/>
      </div>
      <div class="card-body">
        <h5 class="card-title">${el.title}</h5>
        <p class="card-text text-end"><strong>$ ${el.price} </strong></p>
        <div class="text-center">
        <a href="#" class="btn btn-light">Comprar</a>
        </div>
      </div>
    </div>`;
    })
    .join(" ");

  cards.innerHTML = prodInner;
}
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

const fs = require("fs");

productos = [];
class Contenedor {
  constructor(title, price, thumbnail) {
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }
  setProductos(item) {
    productos.push({ id: id, item });
    id++;
  }
  // recibe un objeto y lo guarda en el archivo y devuelve un id
  save() {
    fs.promises
      .writeFile("./productos.txt", JSON.stringify(productos))
      .then((resp) => console.log("Se ha creado con exito"))
      .catch((error) => console.log(error));
  }
  getById(num) {
    //recibe un id y devuelve el objeto con ese id o null si no esta
    fs.promises.readFile("./productos.txt", "utf-8", (error, resp) => {
      if (error) {
        throw new Error(error);
      } else {
        const data = JSON.parse(resp);
        console.log(data.find((el) => el.id === num));
      }
    });
  }
  getAll() {
    fs.promises.readFile("./productos.txt", "utf-8").then((resp) => {
      console.log(`Array de Productos: ${resp}`);
    });
  } // devuelve un array con los objetos presentes en el archivo
  deleteById(num) {
    fs.promises.readFile("./productos.txt", "utf-8").then((resp) => {
      const data = JSON.parse(resp);
      console.log(data.filter((el) => el.id !== num));
    });
  } //Elimina del archivo el objeto con ese id
  deleteAll() {
    setTimeout(() => {
      productos.splice(0);
      id = 0;
      fs.promises
        .writeFile("./productos.txt", JSON.stringify(productos))
        .then(console.log(console.log("Se eliminaron todos los productos")));
    }, 1000);
  } // Elimina todos los objetos del archivo
}
let id = 0;
const prod1 = new Contenedor("Iron Man", 3000, "./img/ironMan");
const prod2 = new Contenedor("Iron Man", 5000, "./img/ironMan");
const prod3 = new Contenedor("SpiderMan", 6000, "./img/ironMan");
prod1.setProductos(prod1);
prod1.setProductos(prod2);
prod1.setProductos(prod3);

console.log(productos);
prod1.save();
prod1.getById(0);
prod1.getAll();
prod1.deleteById(0);
prod1.deleteAll();

const fs = require("fs");
class Contenedor {
  constructor() {
    this.title = "";
    this.price = 0;
    this.thumbnail = "";
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
    const prod = fs.readFileSync("./productos.txt", "utf-8");
    const list = JSON.parse(prod);
    const id = list.find((el) => el.id === num);
    return id ? id : null;
  }
  getAll() {
    const list = fs.readFileSync("./productos.txt", "utf-8");
    return list;
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

module.exports.Contenedor = Contenedor;

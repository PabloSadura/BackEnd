const fs = require("fs");
class Contenedor {
  constructor() {
    this.title = "";
    this.price = 0;
    this.thumbnail = "";
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
}

module.exports.Contenedor = Contenedor;

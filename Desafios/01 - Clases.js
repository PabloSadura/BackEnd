class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }
  getFullName() {
    return console.log(`Nombre: ${this.nombre} Apillido: ${this.apellido}`);
  }
  addMoscota(name) {
    this.mascotas.push(name);
  }
  countMascotas() {
    return console.log(`El usuario tiene: ${this.mascotas.length} mascotas`);
  }
  addBook(title, autor) {
    this.libros.push({ nombre: title, autor: autor });
  }
  getBooksName() {
    return console.log(`Libros: ${this.libros.map((e) => e.nombre)}`);
  }
}

const usuario1 = new Usuario("pablo", "sadura");
usuario1.getFullName();
usuario1.addBook("angeles y demonios", "dan brown");
usuario1.addBook("el inferno", "dan brown");
usuario1.addMoscota("kalu");
usuario1.getBooksName();
usuario1.addMoscota("Mila");
usuario1.countMascotas();

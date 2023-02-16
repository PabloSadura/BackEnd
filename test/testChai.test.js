import mocha from "mocha";
import chai from "chai";
const expect = chai.expect;
import ProductServices from "../services/products.services.js";

describe("Probando ProductServices", () => {
  it("Mostrar todos los productos", async () => {
    const productsServices = new ProductServices();
    const products = await productsServices.getAllProducts();
    expect(products).true;
  });
  it("Agregar Productos", async () => {
    const productsServices = new ProductServices();
    const obj = { name: "Perro", price: 1200, stock: 3 };
    const products = await productsServices.setOneProduct(obj);
    expect(products).to.have.property("id");
  });
  it("Eliminar un producto", async () => {
    const productsServices = new ProductServices();
    const products = await productsServices.deleteById(1);
    expect(products).to.be.equal(true);
  });
  it("Eliminar todos los productos", async () => {
    const productsServices = new ProductServices();
    const products = await productsServices.deleteAll();
    expect(products).to.have.length(0);
  });
  it("Actualizar un producto", async () => {
    const productsServices = new ProductServices();
    const obj = { name: "Perro", price: 1200, stock: 3 };
    const product = await productsServices.updateByID(2, obj);
    expect(product).to.equal(0);
  });
});

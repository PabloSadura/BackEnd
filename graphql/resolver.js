import CartController from "../controllers/cart.controllers.js";
import ProductsController from "../controllers/products.controllers.js";

const productsControllers = new ProductsController();
const cartController = new CartController();
export const resolvers = {
  Query: {
    getAllProducts: async () => {
      return productsControllers.getAllProducts();
    },
    getById: async (_, { id }) => {
      return productsControllers.getById(id);
    },
    getProducts: async () => {
      return cartController.getProducts();
    },
    getOrder: async (_, input) => {
      return cartController.getOrder(input);
    },
  },
  Mutation: {
    setOneProduct: async (_, input) => {
      return productsControllers.setOneProduct(input);
    },
    deleteOneProduct: async (_, { id }) => {
      return productsControllers.deleteOneProduct(id);
    },
    updateOne: async (_, input) => {
      const { id, product } = input;
      return productsControllers.updateOne(id, product);
    },
  },
};

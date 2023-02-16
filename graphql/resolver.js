import ProductsControllers from "../controllers/product.controller.js";

const productsControllers = new ProductsControllers();

export const resolvers = {
  Query: {
    getAllProducts: async () => {
      return productsControllers.getAllProducts();
    },
    getById: async (_, { id }) => {
      return productsControllers.getById(id);
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

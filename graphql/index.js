import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphqlHTTP } from "express-graphql";
import { resolvers } from "./resolver.js";
import { types } from "./types.js";

const graphqlSchema = makeExecutableSchema({
  typeDefs: types,
  resolvers,
});

export default graphqlHTTP({
  graphiql: true,
  schema: graphqlSchema,
});

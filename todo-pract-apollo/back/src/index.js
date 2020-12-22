import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resovlers";
import mongoose from "mongoose";

const PORT = 4000;

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost:27017/todo-test-apollo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen({ port: PORT }, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
};

startServer();

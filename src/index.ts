import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { connect } from "mongoose";
import * as dotenv from "dotenv";

//Resolvers
import { ShipmentsResolver } from "./resolvers/shipments.resolvers";

const executeMain = async () => {
  dotenv.config();

  const schema = await buildSchema({
    resolvers: [ShipmentsResolver],
    emitSchemaFile: true,
    validate: false,
  });

  const mongoose = await connect(process.env.MONGO_URI);

  await mongoose.connection;

  const server = new ApolloServer({ schema: schema });
  const expressServer: Express.Application = Express();

  await server.start();

  server.applyMiddleware({ app: expressServer });

  expressServer.listen({ port: process.env.PORT }, () =>
    console.log(
      `Server ready and listening at ==> http://localhost:${process.env.PORT}${server.graphqlPath}`
    )
  );
};

executeMain().catch((error) => {
  console.log(error, "error");
});

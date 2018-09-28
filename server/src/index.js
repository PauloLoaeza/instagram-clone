import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './typeDefs';
import resolvers from './resolvers';
import models from './models';

const schema = makeExecutableSchema({ typeDefs, resolvers });
const context = { models, user: { id: 1, username: 'BOB' } };
const server = new ApolloServer({ schema, context });

const app = express();
server.applyMiddleware({ app });

mongoose.connect(
  'mongodb://localhost:27017/instagram-clone',
  { useNewUrlParser: true },
  onMongoConnected
);

function onMongoConnected(err) {
  if (err) return;
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

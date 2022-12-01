import { gql } from 'graphql-tag';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import e from 'express';
import cors from 'cors';
import { createServer } from 'http';
const app = e();

app.use(cors());
app.use(e.json());

// Type definitions define the "shape" of your data and specify
const typeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String
    friends: [User!]! # recursive relationship
  }
  # Queries
  type Query {
    me: User!
  }
`;
// Resolvers are functions that return data for the schema.

const resolvers = {
  Query: {
    me() {
      return {
        id: '123',
        name: 'John Doe',
        email: 'khandoe@nowhere.com',
        friends: [
          { id: '4vn6', name: 'Jane Doe', email: 'jamejane@yahoo.com' },
          { id: '4v6', name: 'Merry Jane', email: 'mejane@gmail.com' },
          { id: '43t5', name: 'JP Lovery', email: 'aane@hotmail.com' },
          { id: 'eew3', name: 'Jannet Hippi', email: 'jumnne@org.com' },
        ],
      };
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();
app.use(expressMiddleware(server));

const httpServer = createServer(app);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);

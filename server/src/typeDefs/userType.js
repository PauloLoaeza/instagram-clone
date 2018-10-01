import { gql } from 'apollo-server-express';

const userType = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    fullname: String!
    email: String!
    thumbnail: String
  }

  type Query {
    allUsers: [User]!
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, password: String!, fullname: String!, email: String!): User
  }
`;

export default userType;

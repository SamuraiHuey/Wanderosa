const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    itenerary: [Itenerary]
  }

  type Itenerary {
    _id: ID
    date: String
    location: String
    mornText: String
    noonText: String
    eveText: String
    createdAt: String
    username: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    itenerary(username: String): [Itenerary]
  }


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

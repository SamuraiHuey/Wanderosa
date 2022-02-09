const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    itinerary: [Itinerary]
  }

  type Itinerary {
    _id: ID
    day: String
    location: String
    morn: String
    noon: String
    eve: String
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
    itinerary(username: String): [Itinerary]
  }


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addDay(day: String!, location: String!, morn: String, noon: String, eve: String): Itinerary
  }
`;

module.exports = typeDefs;


import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar Date

  type Query {
    todos: [Todo!]!
  }

  type Todo {
    id: ID!
    title: String!
    isDone: Boolean
    date: Date
  }

  type Mutation {
    addTodo(title: String!): [Todo!]!
    deleteTodo(id: ID!): [Todo!]!
    changeTodoStatus(id: ID!): [Todo!]!
  }
`;

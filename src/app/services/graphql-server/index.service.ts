import { Injectable } from "@angular/core";
import { ApolloServer, gql } from "apollo-server-express";

@Injectable({
  providedIn: "root",
})
export class IndexService {
  public typeDefs = gql`
    type User {
      id: Number;
      first_name: String;
      last_name: String;
      username: String;
      password: String;
    }

    type Query {
      users: [User]
    }
  `;

  public users = [
    {
      id: "d.54feas",
      first_name: "Steven",
      last_name: "Midgley",
      username: "casualsmidge",
      password: "password",
    },
  ];

  public resolvers = {
    Query: {
      users: () => this.users
    }
  }

  constructor() {}
}

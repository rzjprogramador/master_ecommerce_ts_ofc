import typeDefs from "@src/providers/routes_servers/routes_schema_graphql/root_typedefs"
import resolvers from "@src/providers/routes_servers/routes_schema_graphql/root_resolvers"

import { ApolloServer } from "apollo-server-express"
import { Express } from "express"

export const setupApolloServer = async (app: Express): Promise<void> => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  await server.start()
  server.applyMiddleware({ app })
}

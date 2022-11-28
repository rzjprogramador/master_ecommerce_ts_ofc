import typeDefs from "@src/ServerModules/RoutesServers/RoutesSchemaGraphql/root_typedefs"
import resolvers from "@src/ServerModules/RoutesServers/RoutesSchemaGraphql/root_resolvers"

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

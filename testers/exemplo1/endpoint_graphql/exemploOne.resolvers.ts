import { exemploOneInicio } from "@src/testers/exemplo1/endpoint_graphql/handlers/exemplo1"
import { createExemploOne } from "@src/testers/exemplo1/endpoint_graphql/handlers/create_exemplo_one"



export default {
  Query: {
    exemploOneInicio,
  },

  Mutation: {
    createExemploOne,
  }
}

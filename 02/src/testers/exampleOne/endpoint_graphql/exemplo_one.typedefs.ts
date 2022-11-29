import { gql } from "apollo-server-express"

const exemploOneTypeDefs = gql`

  type ExemploOne {
    one: String
    two: String
  }

  input ArgsCreateExemploOne {
    one: String
    two: String
  }

  type Query {
    exemploOneInicio: String
  }

  type Mutation {
    createExemploOne(argsCreateExemploOne: ArgsCreateExemploOne): ExemploOne
  }
`

export default exemploOneTypeDefs
type ArgsCreateExemploOne = {
  argsCreateExemploOne: {
    one: string
    two: string
  }
}

export const createExemploOne = async (_: any, { argsCreateExemploOne }: ArgsCreateExemploOne) => {
  return await argsCreateExemploOne
}

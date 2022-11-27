export class ServerError extends Error {
  constructor() {
    super(`Ops ... Erro inesperado, tente novamente`)
    this.name = "ServerError"
  }
}

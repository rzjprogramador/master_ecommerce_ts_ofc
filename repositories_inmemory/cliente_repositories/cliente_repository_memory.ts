import { ClienteRepository, ModelCliente } from '../../src/modules/participant/clientes/entity/cliente.contracts'

export class ClienteRepositoryMemory implements ClienteRepository {
    public readonly items: ModelCliente[] = []

    async create(cliente: ModelCliente) {
        await this.items.push(cliente)
        return await cliente
    }
}
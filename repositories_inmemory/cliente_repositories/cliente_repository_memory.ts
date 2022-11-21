import { ClienteRepository, ModelCliente } from '../../src/modules/participant/clientes/cases_entity/create/cliente.contracts'

export class ClienteRepositoryMemory implements ClienteRepository {
    public readonly items: ModelCliente[] = []

    async create(cliente: ModelCliente) {
        await this.items.push(cliente)
        return await cliente
    }
}
import { ClienteRepository, ModelCliente } from '../../src/modules/participant/clientes/cases_entity/create/cliente.contracts'

export class ClienteRepositoryMemory implements ClienteRepository {
    public readonly _items: ModelCliente[] = []

    async create(cliente: ModelCliente) {
        await this._items.push(cliente)
        return await cliente
    }
}
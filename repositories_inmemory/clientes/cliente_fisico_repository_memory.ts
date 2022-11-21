import { ClienteFisicoRepository, ModelClienteFisico } from '../../src/modules/clientes/_data/contracts_clientes/cliente_fisico.contracts'

export class ClienteFisicoRepositoryMemory implements ClienteFisicoRepository {
    public readonly _items: ModelClienteFisico[] = []

    async create(cliente: ModelClienteFisico) {
        await this._items.push(cliente)
        return await cliente
    }
}
import { ClienteFisicoRepository, ModelClienteFisico } from '../../src/modules/clientes/cliente_fisico/cases_entity/_props/cliente_fisico.contracts'

export class ClienteFisicoRepositoryMemory implements ClienteFisicoRepository {
    public readonly _items: ModelClienteFisico[] = []

    async create(cliente: ModelClienteFisico) {
        await this._items.push(cliente)
        return await cliente
    }
}
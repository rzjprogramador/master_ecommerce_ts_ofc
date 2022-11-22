import { RepositoryClientepf, ClientepfModel } from '../../src/modules/clientes/Contracts/Clientepf.contract'

export class ClientepfRepositoryMemory implements RepositoryClientepf {
    public readonly _items: ClientepfModel[] = []

    async create(cliente: ClientepfModel) {
        await this._items.push(cliente)
        return await cliente
    }
}
import { RepositoryClientepf, ClientepfModel } from '../../src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'

export class ClientepfRepositoryMemory implements RepositoryClientepf {
    public items: ClientepfModel[] = []

    async create(cliente: ClientepfModel) {
        await this.items.push(cliente)
        return await cliente
    }
}
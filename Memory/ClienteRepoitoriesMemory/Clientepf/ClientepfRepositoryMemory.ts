import { ClienteRepository } from '../_Contracts/_Contracts_ClienteRepository'
import { ClientepfModel } from '../../../src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { ID } from '@src/App/Contracts/ContractAppModules'

export class ClientepfRepositoryMemory implements ClienteRepository {
    public items: ClientepfModel[] = []

    async acessItems() {
        return await this.items
    }

    async create(cliente: ClientepfModel) {
        await this.items.push(cliente)
        return await cliente
    }

    async list() {
        return await this.items
    }

    async update(cliente: ClientepfModel) {
        const id = cliente?.id
        const clienteFound = await this.items.find(client => client.id === id)
        return await { ...clienteFound, ...cliente }
    }

    async remove(id: ID) {
        let operation = false
        this.items.forEach(
            (value, index, object) => {
                if (value.id === id.id) {
                    object.splice(index, 1)
                    operation = true
                }
            }
        )
        return operation
    }
}
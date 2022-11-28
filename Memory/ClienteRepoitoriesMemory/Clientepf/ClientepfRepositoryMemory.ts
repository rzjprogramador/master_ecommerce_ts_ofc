import { ClienteRepository } from '../_Contracts/_Contracts_ClienteRepository'
import { ClientepfModel } from '../../../src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { ID } from '@src/App/Contracts/ContractAppModules'

export class ClientepfRepositoryMemory implements ClienteRepository {
    public items: ClientepfModel[] = []

    async create(cliente: ClientepfModel) {
        await this.items.push(cliente)
        return await cliente
    }

    async list() {
        return await this.items
    }

    async update(cliente: ClientepfModel, newData: ClientepfModel) {
        return await { ...newData, ...cliente }
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
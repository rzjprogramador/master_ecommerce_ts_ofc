import { ClienteRepository } from '../../../src/Modules/Clientes/_AllClientes/Contracts/AllClientesContract'

export const ClientepfRepositoryMemory: ClienteRepository = {
    items: [],

    async acessItems() {
        return await this.items
    },

    async create(cliente) {
        await this.items.push(cliente)
        return await cliente
    },

    async list() {
        return await this.items
    },

    async update(cliente) {
        const id = cliente?.id
        const clienteFound = await this.items.find(client => client.id === id)
        return await { ...clienteFound, ...cliente }
    },

    async remove(id) {
        let operation = false
        this.items.forEach(
            (value, index, object) => {
                if (value.id === id) {
                    object.splice(index, 1)
                    operation = true
                }
            }
        )
        return operation
    },

}

import { ClienteRepository } from '../../../../../src/Modules/Clientes/_AllClientes/Contracts/AllClientesContract'
import { db } from '../../_Conexao'

export const ClientepfRepositoryFirebase: ClienteRepository = {
    items: [],

    async acessItems() { // VINCULAR FIREBASE
        return await this.items
    },

    async create(cliente) {
        await db.clientespf.add(cliente)
        return await cliente
    },

    async list() { // VINCULAR FIREBASE
        return await this.items
    },

    async update(cliente) { // VINCULAR FIREBASE
        const id = cliente?.id
        const clienteFound = await this.items.find(client => client.id === id)
        return await { ...clienteFound, ...cliente }
    },

    async remove(id) { // VINCULAR FIREBASE
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

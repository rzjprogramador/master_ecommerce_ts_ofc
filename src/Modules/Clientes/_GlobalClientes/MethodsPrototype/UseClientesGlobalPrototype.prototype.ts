import { UseClienteGlobalPrototype } from '@src/Modules/Clientes/_GlobalClientes/Contracts/ClientesGlobalContract'
import { clientesGlobalVariantes } from '@src/Modules/Clientes/_GlobalClientes/Variantes/ClientesGlobalVariantes'

export const useClienteGlobalPrototype: UseClienteGlobalPrototype = {
    async getNameCompleted(): Promise<string> {
        return await `${this.nome} ${this.sobrenome}`
    },

    async getIdentificator(): Promise<string> {
        return await `${this.pessoa}`
    },
    // pessoa: 'None'
}
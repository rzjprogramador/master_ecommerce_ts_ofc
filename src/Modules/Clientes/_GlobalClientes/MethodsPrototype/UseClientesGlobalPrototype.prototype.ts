import { UseClienteGlobalPrototype } from '@src/Modules/Clientes/_GlobalClientes/Contracts/ClientesGlobalContract'


export const useClienteGlobalPrototype: UseClienteGlobalPrototype = {

    async getNameCompleted() {
        return await `${this.nome} ${this.sobrenome}`
    },

    async getIdentificator() {
        return await `${this.pessoa}`
    },

}
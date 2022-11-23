import { UseClientepfPrototype } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { variantesClientepf } from '@src/Modules/Clientes/Variantes/Clientepf.variantes'

export const useClientepfPrototype: UseClientepfPrototype = {
    async getNameCompleted(): Promise<string> {
        return await `${this.nome} ${this.sobrenome}`
    },

    async getIdentificator(): Promise<string> {
        return await variantesClientepf.typeCliente
    }
}
import { ClientesMethodsProto } from '@src/Modules/Clientes/_AllClientes/Contracts/AllClientesContract'
import { clientesDataGlobal } from '../Fallbacks/AllClientesFallbacks'


export const clientesMethodsProto: ClientesMethodsProto = {

    async getNomeCompleto() {
        return await `${this.nome} ${this.sobrenome}`
    },

    async getIdentificador() {
        return await clientesDataGlobal.typeCliente
    },

}
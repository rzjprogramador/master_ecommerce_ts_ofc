import { ClientesMethodsProto } from '@src/Modules/Clientes/_GlobalClientes/Contracts/ClientesGlobalContract'
import { clientesDataGlobal } from '../Data/ClientesDataGlobal'


export const clientesMethodsProto: ClientesMethodsProto = {

    async getNomeCompleto() {
        return await `${this.nome} ${this.sobrenome}`
    },

    async getIdentificador() {
        return await clientesDataGlobal.typeCliente
    },

}
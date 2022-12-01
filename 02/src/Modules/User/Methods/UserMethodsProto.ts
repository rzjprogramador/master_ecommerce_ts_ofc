import { PropsUserMethodsProto } from '@src/Modules/User/Core/Contracts/UserContracts'


export const userMethodsProto: PropsUserMethodsProto = {
    async getNomeCompleto() {
        return await `${this.primeiroNome} ${this.restanteNome}`
    }
}
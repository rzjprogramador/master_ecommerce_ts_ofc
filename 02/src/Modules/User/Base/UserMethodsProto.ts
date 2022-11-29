import { PropsUserMethodsProto } from '@src/Modules/User/Base/UserContracts'


export const userMethodsProto: PropsUserMethodsProto = {
    async getNomeCompleto() {
        return await `${this.primeiroNome} ${this.restanteNome}`
    }
}
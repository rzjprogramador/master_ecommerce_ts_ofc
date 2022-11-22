import { generateID } from "@src/app/helpers/generators/records_generators"
import { ClientesProtocol } from '@src/modules/clientes/Contracts/ClientesGlobal.contract'
import { IClientepfProps } from '@src/modules/clientes/Contracts/Clientepf.contract'
import { varsMessagesClientepf } from '@src/modules/clientes/_Variantes/Clientepf.variantes'

export class ClientepfProps implements IClientepfProps, ClientesProtocol {
    public readonly id: string
    public primeiroNome: string
    public sobrenome: string
    public cpf: string
    public nomeCompleto: string
    public msgIdentificator: string
    public token: string

    constructor() {
        this.id = this.id ?? generateID()
    }

    async getNameCompleted() {
        return await `${this.primeiroNome} ${this.sobrenome}`
    }

    async getIdentificator() {
        return await `O Cliente de nome ${this.primeiroNome} é ${varsMessagesClientepf.isFisico}`
    }

}
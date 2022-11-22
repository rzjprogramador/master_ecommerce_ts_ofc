import { generateID } from "@src/app/helpers/generators/records_generators"
import { ArgsCreateClientepf } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { ClientesProtocol } from '@src/Modules/Clientes/Contracts/ClientesGlobal.contract'
import { IClientepfProps } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { varsMessagesClientepf } from '@src/Modules/Clientes/_Variantes/Clientepf.variantes'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'

export class ClientepfProps implements IClientepfProps, ClientesProtocol {
    public readonly id: string
    public primeiroNome: string
    public sobrenome: string
    public cpf: string
    public nomeCompleto: string
    public msgIdentificator: string
    public token: string
  prototype: any

    constructor() {
        this.id = this.id ?? generateID()
    }

    async create(cliente: ArgsCreateClientepf) {
        this.primeiroNome = cliente.primeiroNome
        this.sobrenome = cliente.sobrenome
        this.cpf = cliente.cpf
        this.token = cliente.token

        const modelEntity = {
            id: this.id,
            primeiroNome: this.primeiroNome,
            sobrenome: this.sobrenome,
            nomeCompleto: await this.getNameCompleted(),
            cpf: this.cpf,
            token: this.token,
            msgIdentificator: await this.getIdentificator()
        }

        const records = recordsDNAParticipant
        const transformEntity = { ...modelEntity, records }
        return await transformEntity
    }

    async getNameCompleted() {
        return await `${this.primeiroNome} ${this.sobrenome}`
    }

    async getIdentificator() {
        return await `O Cliente de nome ${this.primeiroNome} é ${varsMessagesClientepf.isFisico}`
    }

}
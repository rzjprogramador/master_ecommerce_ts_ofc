import { generateID } from "@src/app/helpers/generators/records_generators"
import { CreateClientepf, UseProtoCliente } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { variantesClientepf } from '@src/Modules/Clientes/_Variantes/Clientepf.variantes'

const useProtoCliente: UseProtoCliente = {
    async getNameCompleted(): Promise<string> {
        return await `${this.nome} ${this.sobrenome}`
    },

    async getIdentificator(): Promise<string> {
        return await variantesClientepf.typeCliente
    },
}

export const createClientepf: CreateClientepf = async ({ nome, sobrenome, cpf, token }) => {
    const clientepf = Object.create(useProtoCliente)
    clientepf.nome = nome
    clientepf.sobrenome = sobrenome
    clientepf.cpf = cpf
    clientepf.token = token
    clientepf.nomeCompleto = await clientepf.getNameCompleted()
    clientepf.typeCliente = await clientepf.getIdentificator()
    clientepf.id = clientepf.id ?? generateID()

    const records = recordsDNAParticipant
    const transformEntity = { ...clientepf, records }
    return await transformEntity

    // return clientepf
}

/*
export class ClientepfProps implements IClientepfProps, ClientesProtocol {
    public readonly id: string
    public nome: string
    public sobrenome: string
    public cpf: string
    public nomeCompleto: string
    public msgIdentificator: string
    public token: string

    constructor() {
        this.id = this.id ?? generateID()
    }

    async create(cliente: ArgsCreateClientepf) {
        this.nome = cliente.nome
        this.sobrenome = cliente.sobrenome
        this.cpf = cliente.cpf
        this.token = cliente.token

        const modelEntity = {
            id: this.id,
            primeiroNome: this.nome,
            sobrenome: this.sobrenome,
            cpf: this.cpf,
            token: this.token,
            nomeCompleto: await this.getNameCompleted(),
            msgIdentificator: await this.getIdentificator()
        }

        const records = recordsDNAParticipant
        const transformEntity = { ...modelEntity, records }
        return await transformEntity
    }

    async getNameCompleted() {
        return await `${this.nome} ${this.sobrenome}`
    }

    async getIdentificator() {
        return await `O Cliente de nome ${this.nome} é ${varsMessagesClientepf.isFisico}`
    }

}

*/
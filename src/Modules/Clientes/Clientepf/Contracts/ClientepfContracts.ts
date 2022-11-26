import { RegistersParticipant } from '@src/app/Contracts/Registers.contracts'
import { HttpResponse } from '@src/app/Helpers/responses/http.contract'
import { TypeCliente } from '@src/Modules/Clientes/_GlobalClientes/Contracts/ClientesGlobalContract'

export interface ClientepfModel {
    id: string
    token: string
    nome: string
    sobrenome: string
    cpf: string
    registers: RegistersParticipant
}

export type CreateClientepfMaker = (cliente: ArgsCreateClientepf) => Promise<ClientepfModel>
// createClientepfMaker = async ({ nome, sobrenome, cpf, token }: ArgsCreateClientepf) =>
// export type CreateClientepf = (args: ArgsCreateClientepf) => Promise<ClientepfModel>


export type ArgsCreateClientepf = Pick<ClientepfModel, 'nome' | 'sobrenome' | 'token' | 'cpf'>

export type CreateClientepfService = (cliente: ArgsCreateClientepf) => Promise<ClientepfModel>

export type CreateClientepfByMediatorRepository = (cliente: ClientepfModel) => Promise<ClientepfModel>

export type CreateClientepfControll = (cliente: ArgsCreateClientepf) => Promise<HttpResponse<ClientepfModel | Error>>

export interface RepositoryClientepf {
    create(cliente: ClientepfModel): Promise<ClientepfModel>
}

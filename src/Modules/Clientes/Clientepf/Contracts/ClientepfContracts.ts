import { RecordsDNAParticipant } from '@src/app/contracts/records_dna.contracts'
import { HttpResponse } from '@src/app/helpers/responses/http.contract'
import { TypeCliente } from '@src/Modules/Clientes/_GlobalClientes/Contracts/ClientesGlobalContract'

export interface ClientepfModel {
    id: string
    token: string
    nome: string
    sobrenome: string
    nomeCompleto: string
    cpf: string
    pessoa: TypeCliente
    typeCliente: TypeCliente
    records: RecordsDNAParticipant
}

export type CreateClientepf = (args: ArgsCreateClientepf) => Promise<ClientepfModel>


export type ArgsCreateClientepf = Pick<ClientepfModel, 'nome' | 'sobrenome' | 'token' | 'cpf'>

export type CreateClientepfService = (cliente: ArgsCreateClientepf) => Promise<ClientepfModel>

export type CreateClientepfByMediatorRepository = (cliente: ClientepfModel) => Promise<ClientepfModel>

export type CreateClientepfControll = (cliente: ArgsCreateClientepf) => Promise<HttpResponse<ClientepfModel | Error>>

export interface RepositoryClientepf {
    create(cliente: ClientepfModel): Promise<ClientepfModel>
}

import { RecordsDNAParticipant } from '@src/app/contracts/records_dna.contracts'
import { HttpResponse } from '@src/app/helpers/responses/http.contract'

export interface ClientepfModel {
    id: string
    token: string
    nome: string
    sobrenome: string
    nomeCompleto: string
    cpf: string
    typeCliente: string
    records: RecordsDNAParticipant
}

export type CreateClientepf = (args: ArgsCreateClientepf) => Promise<ClientepfModel>

export interface UseClientepfPrototype {
    nome?: string, sobrenome?: string
    getNameCompleted(): Promise<string>
    getIdentificator(): Promise<string>
}

export type TypeCliente = 'Pessoa Fisica' | 'Pessoa Juridica'

export type ArgsCreateClientepf = Pick<ClientepfModel, 'nome' | 'sobrenome' | 'token' | 'cpf'>

export type CreateClientepfService = (cliente: ArgsCreateClientepf) => Promise<ClientepfModel>

export type CreateClientepfControll = (cliente: ArgsCreateClientepf) => Promise<HttpResponse<ClientepfModel | Error>>

export interface RepositoryClientepf {
    create(cliente: ClientepfModel): Promise<ClientepfModel>
}

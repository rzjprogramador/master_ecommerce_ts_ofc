import { RecordsDNAParticipant } from '@src/app/contracts/records_dna.contracts'
import { HttpResponse } from '@src/app/helpers/responses/http.contract'

export interface ClientepfModel {
    id: string
    token: string
    primeiroNome: string
    sobrenome: string
    nomeCompleto: string
    cpf: string
    msgIdentificator: string
    records: RecordsDNAParticipant
}

export type IClientepfProps = Pick<ClientepfModel, 'primeiroNome' | 'sobrenome' | 'token' | 'cpf' | 'msgIdentificator' | 'id'>

export type ArgsCreateClientepf = Pick<ClientepfModel, 'primeiroNome' | 'sobrenome' | 'token' | 'cpf'>

export type CreateClientepfService = (cliente: ArgsCreateClientepf) => Promise<ClientepfModel>

export type CreateClientepfControll = (cliente: ArgsCreateClientepf) => Promise<HttpResponse<ClientepfModel | Error>>

export interface RepositoryClientepf {
    create(cliente: ClientepfModel): Promise<ClientepfModel>
}

import { RecordsDNAParticipant } from '@src/app/contracts/records_dna.contracts'
import { HttpResponse } from '@src/app/helpers/responses/http.contract'

export interface ModelClienteFisico {
    id: string
    token: string
    primeiroNome: string
    sobrenome: string
    nomeCompleto: string
    cpf: string
    msgIdentificator: string
    records: RecordsDNAParticipant
}

export type PropsClienteFisico = Pick<ModelClienteFisico, 'primeiroNome' | 'sobrenome' | 'token' | 'cpf' | 'msgIdentificator' | 'id'>

export type ArgsCreateClienteFisico = Pick<ModelClienteFisico, 'primeiroNome' | 'sobrenome' | 'token' | 'cpf'>

export type CreateClienteFisicoService = (cliente: ArgsCreateClienteFisico) => Promise<ModelClienteFisico>
export type CreateClienteFisicoControll = (cliente: ArgsCreateClienteFisico) => Promise<HttpResponse<ModelClienteFisico | Error>>

export interface ClienteFisicoRepository {
    create(cliente: ModelClienteFisico): Promise<ModelClienteFisico>
}

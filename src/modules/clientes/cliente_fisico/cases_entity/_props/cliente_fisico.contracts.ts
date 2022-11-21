import { RecordsDNAParticipant } from '@src/app/contracts/records_dna.contracts'
import { HttpResponse } from '@src/app/helpers/responses/http.contract'

export interface ModelClienteFisico {
    id: string
    token: string
    nomeCliente: string
    records: RecordsDNAParticipant
}

export type PropsClienteFisico = Pick<ModelClienteFisico, 'nomeCliente' | 'token' | 'id'>
export type ArgsCreateClienteFisico = Pick<ModelClienteFisico, 'nomeCliente' | 'token'>

export type CreateClienteFisicoService = (cliente: ArgsCreateClienteFisico) => Promise<ModelClienteFisico>
export type CreateClienteFisicoControll = (cliente: ArgsCreateClienteFisico) => Promise<HttpResponse<ModelClienteFisico | Error>>

export interface ClienteFisicoRepository {
    create(cliente: ModelClienteFisico): Promise<ModelClienteFisico>
}

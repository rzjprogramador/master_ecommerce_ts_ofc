import { RecordsDNAParticipant } from '@src/app/contracts_global/records_dna.contracts'
import { HttpResponse } from '@src/app/helpers/responses/http.contract'

export interface ModelCliente {
    id: string
    token: string
    nomeCliente: string
    records: RecordsDNAParticipant
}

export type ArgsCliente = Pick<ModelCliente, 'nomeCliente' | 'token'>

export type CreateClienteService = (cliente: ArgsCliente) => Promise<ModelCliente>
export type CreateClienteControll = (cliente: ArgsCliente) => Promise<HttpResponse<ModelCliente | Error>>

export interface ClienteRepository {
    create(cliente: ModelCliente): Promise<ModelCliente>
}

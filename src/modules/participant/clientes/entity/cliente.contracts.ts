import { RecordsDNAParticipant } from '@src/app/contracts_global/records_dna.contracts'

export interface ModelCliente {
    id: string
    token: string
    nomeCliente: string
    records: RecordsDNAParticipant
}

export type ArgsCliente = Pick<ModelCliente, 'nomeCliente' | 'token'>

export type CreateClienteCase = (cliente: ArgsCliente) => Promise<ModelCliente>

export interface ClienteRepository {
    create(cliente: ModelCliente): Promise<ModelCliente>
}

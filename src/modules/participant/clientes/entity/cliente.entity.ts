import { generateID } from "@src/app/helpers/generators/records_generators"
import { recordsDNAParticipant } from '@src/app/use_objects_global/records_dna_participant'
import { ArgsCliente } from '@src/modules/participant/clientes/entity/cliente.contracts'

export class Cliente {
    private nomeCliente: string
    private id: string
    private token: string

    constructor() {
        if (!this.id) { this.id = generateID() }
    }

    async create(cliente: ArgsCliente) {
        this.nomeCliente = cliente.nomeCliente
        this.token = cliente.token

        const modelEntity = {
            nomeCliente: this.nomeCliente,
            id: this.id,
            token: this.token
        }

        const records = recordsDNAParticipant
        const transformEntity = { ...modelEntity, records }
        return await transformEntity
    }

}
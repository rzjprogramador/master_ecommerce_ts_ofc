import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { ArgsCreateClienteFisico } from '@src/modules/clientes/cliente_fisico/cases_entity/_props/cliente_fisico.contracts'
import { ClienteFisicoProps } from '@src/modules/clientes/cliente_fisico/cases_entity/_props/cliente_fisico_props.entity'

export class CreateClienteFisicoEntity extends ClienteFisicoProps {
    constructor() { super() }

    async execute(cliente: ArgsCreateClienteFisico) {
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

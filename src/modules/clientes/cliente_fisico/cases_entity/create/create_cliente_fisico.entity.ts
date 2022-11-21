import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { ArgsCreateClienteFisico } from '@src/modules/clientes/_data/contracts_clientes/cliente_fisico.contracts'
import { ClienteFisicoProps } from '@src/modules/clientes/cliente_fisico/cases_entity/_props/cliente_fisico_props.entity'

export class CreateClienteFisicoEntity extends ClienteFisicoProps {
    constructor() { super() }

    async execute(cliente: ArgsCreateClienteFisico) {
        this.primeiroNome = cliente.primeiroNome
        this.sobrenome = cliente.sobrenome
        this.cpf = cliente.cpf
        this.token = cliente.token

        const modelEntity = {
            id: this.id,
            primeiroNome: this.primeiroNome,
            sobrenome: this.sobrenome,
            nomeCompleto: this.getNameCompleted(),
            cpf: this.cpf,
            token: this.token,
            msgIdentificator: this.getIdentificator()
        }

        const records = recordsDNAParticipant
        const transformEntity = { ...modelEntity, records }
        return await transformEntity
    }

}

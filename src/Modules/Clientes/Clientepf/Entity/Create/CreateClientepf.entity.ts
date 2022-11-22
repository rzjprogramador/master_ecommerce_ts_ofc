import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { ArgsCreateClientepf } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { ClientepfProps } from '@src/Modules/Clientes/Clientepf/Entity/_Props/ClientepfProps.entity'

export class CreateClientepf extends ClientepfProps {
    constructor() { super() }

    async create(cliente: ArgsCreateClientepf) {
        this.primeiroNome = cliente.primeiroNome
        this.sobrenome = cliente.sobrenome
        this.cpf = cliente.cpf
        this.token = cliente.token

        const modelEntity = {
            id: this.id,
            primeiroNome: this.primeiroNome,
            sobrenome: this.sobrenome,
            nomeCompleto: await this.getNameCompleted(),
            cpf: this.cpf,
            token: this.token,
            msgIdentificator: await this.getIdentificator()
        }

        const records = recordsDNAParticipant
        const transformEntity = { ...modelEntity, records }
        return await transformEntity
    }

}

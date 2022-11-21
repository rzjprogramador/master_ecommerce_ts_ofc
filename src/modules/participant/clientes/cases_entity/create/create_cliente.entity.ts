import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { ArgsCliente } from '@src/modules/participant/clientes/cases_entity/create/cliente.contracts'
import { ClienteProps } from '@src/modules/participant/clientes/cases_entity/create/cliente_props.entity'

export class CreateClienteEntity extends ClienteProps {

    async execute(cliente: ArgsCliente) {
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

// export class Cliente{
//     private nomeCliente: string
//     private id: string
//     private token: string

//     constructor() {
//         if (!this.id) { this.id = generateID() }
//     }

//     async create(cliente: ArgsCliente) {
//         this.nomeCliente = cliente.nomeCliente
//         this.token = cliente.token

//         const modelEntity = {
//             nomeCliente: this.nomeCliente,
//             id: this.id,
//             token: this.token
//         }

//         const records = recordsDNAParticipant
//         const transformEntity = { ...modelEntity, records }
//         return await transformEntity
//     }

// }
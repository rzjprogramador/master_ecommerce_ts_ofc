import { clienteFakeArgsRequestUnitysOne } from '@src/entitys/participant/clientes/data/fakes/clienteFakeArgsRequestUnitys'
import { recordsDNAParticipant } from '@src/app/use_objects_global/records_dna_participant'
import { ModelCliente } from '@src/entitys/participant/clientes/entity/cliente.contracts'
import { generateID } from '@src/app/helpers/generators/records_generators'

export const clienteSeedOne: ModelCliente = {
    ...clienteFakeArgsRequestUnitysOne,
    records: recordsDNAParticipant,
    id: generateID(),
}
// console.log(clienteSeedOne)

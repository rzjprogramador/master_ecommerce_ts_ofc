import { clienteFakeArgsRequestUnitysOne } from '@src/modules/participant/clientes/data/fakes/clienteFakeArgsRequestUnitys'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { ModelCliente } from '@src/modules/participant/clientes/cases_entity/create/cliente.contracts'
import { generateID } from '@src/app/helpers/generators/records_generators'

export const clienteSeedOne: ModelCliente = {
    ...clienteFakeArgsRequestUnitysOne,
    records: recordsDNAParticipant,
    id: generateID(),
}
// console.log(clienteSeedOne)

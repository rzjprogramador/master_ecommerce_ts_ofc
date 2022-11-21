import { clienteFakeArgsRequestUnitysOne } from '@src/modules/clientes/cliente_fisico/data/fakes/clienteFakeArgsRequestUnitys'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { ModelClienteFisico } from '@src/modules/clientes/cliente_fisico/cases_entity/_props/cliente_fisico.contracts'
import { generateID } from '@src/app/helpers/generators/records_generators'

export const clienteSeedOne: ModelClienteFisico = {
    ...clienteFakeArgsRequestUnitysOne,
    records: recordsDNAParticipant,
    id: generateID(),
}
// console.log(clienteSeedOne)

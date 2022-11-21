import { fakeClienteFisicoArgsOne } from '@src/modules/clientes/cliente_fisico/_data/fakes/fakeClienteFisicoArgsUnitys'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { ModelClienteFisico } from '@src/modules/clientes/_data/contracts_clientes/cliente_fisico.contracts'
import { generateID } from '@src/app/helpers/generators/records_generators'

export const clienteSeedOne: ModelClienteFisico = {
    ...fakeClienteFisicoArgsOne,
    records: recordsDNAParticipant,
    id: generateID(),
}

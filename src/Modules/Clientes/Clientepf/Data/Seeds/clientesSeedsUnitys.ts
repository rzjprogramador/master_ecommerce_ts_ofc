import { fakeClientePfArgsOne } from '@src/Modules/Clientes/Clientepf/Data/Fakes/fakeClientePfArgs'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { ClientepfModel } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { generateID } from '@src/app/helpers/generators/records_generators'
import { varsClientepfSeedOne } from '@src/Modules/Clientes/_Variantes/Clientepf.variantes'

export const clienteSeedOne: ClientepfModel = {
    ...fakeClientePfArgsOne,
    records: recordsDNAParticipant,
    id: generateID(),
    nomeCompleto: varsClientepfSeedOne.nomeCompleto,
    msgIdentificator: varsClientepfSeedOne.msgIdentificator
}

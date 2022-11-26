import { ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { registersParticipant } from '@src/app/ObjectsOfUse/RegistersParticipant'
import { clientepfVariantesOne, clientepfVariantesTwo } from '@src/Modules/Clientes/Clientepf/Data/ClientepfVariantes.variantes'

type ClientepfSeed = ClientepfModel
// type ClientepfSeed = Omit<ClientepfModel, 'id'>

export const clientepfSeedOne: ClientepfSeed = {
    ...clientepfVariantesOne.args,
    registers: registersParticipant,
    id: clientepfVariantesOne.id,
}

export const clientepfSeedTwo: ClientepfSeed = {
    ...clientepfVariantesOne.args,
    registers: registersParticipant,
    id: clientepfVariantesTwo.id
}

import { ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { registersParticipant } from '@src/app/ObjectsOfUse/RegistersParticipant'
import { clientepfFakeOne, clientepfFakeTwo } from '@src/Modules/Clientes/Clientepf/Fallbacks/Fakes/ClientepfFakes'

type ClientepfSeed = ClientepfModel
// type ClientepfSeed = Omit<ClientepfModel, 'id'>

export const clientepfSeedOne: ClientepfSeed = {
    ...clientepfFakeOne.args,
    registers: registersParticipant,
    id: clientepfFakeOne.id,
}

export const clientepfSeedTwo: ClientepfSeed = {
    ...clientepfFakeOne.args,
    registers: registersParticipant,
    id: clientepfFakeTwo.id
}

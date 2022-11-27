import { ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { registersParticipant } from '@src/App/ObjectsOfUse/RegistersParticipant'
import { clientepfFakeOne, clientepfFakeTwo } from '@src/Modules/Clientes/Clientepf/Fallbacks/Fakes/ClientepfFakes'

type ClientepfSeed = ClientepfModel
// type ClientepfSeed = Omit<ClientepfModel, 'id'>

export const clientepfSeedOne: ClientepfSeed = {
    ...clientepfFakeOne,
    registers: registersParticipant,
    id: clientepfFakeOne.id,
    idb: clientepfFakeOne.idb,
}

export const clientepfSeedTwo: ClientepfSeed = {
    ...clientepfFakeOne,
    registers: registersParticipant,
    id: clientepfFakeTwo.id,
    idb: clientepfFakeTwo.idb
}

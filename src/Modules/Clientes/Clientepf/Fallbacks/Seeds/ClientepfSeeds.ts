import { ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { registersParticipant } from '@src/App/ObjectsOfUse/RegistersParticipant'
import { clientepfFakeNoIdOne, clientepfFakeNoIdTwo, } from '@src/Modules/Clientes/Clientepf/Fallbacks/Fakes/ClientepfFakes'

type ClientepfSeed = ClientepfModel

export const clientepfSeedOne: ClientepfSeed = {
    ...clientepfFakeNoIdOne,
    registers: registersParticipant,
    id: 'seedIdOne',
    idb: 'seedIdbOne',
}

export const clientepfSeedTwo: ClientepfSeed = {
    ...clientepfFakeNoIdTwo,
    registers: registersParticipant,
    id: 'seedIdTwo',
    idb: 'seedIdbTwo',
}

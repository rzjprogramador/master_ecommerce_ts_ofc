import { ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { registersParticipant } from '@src/App/ObjectsOfUse/RegistersParticipant'
import { clientepfFakeOne, clientepfFakeTwo, clientepfFakeUpdateOne, } from '@src/Modules/Clientes/Clientepf/Fallbacks/Fakes/ClientepfFakes'

type ClientepfSeed = ClientepfModel

export const clientepfSeedOne: ClientepfSeed = {
    ...clientepfFakeOne,
    registers: registersParticipant,
    id: 'seedIdOne',
    idb: 'seedIdbOne',
}

export const clientepfSeedTwo: ClientepfSeed = {
    ...clientepfFakeTwo,
    registers: registersParticipant,
    id: 'seedIdTwo',
    idb: 'seedIdbTwo',
}

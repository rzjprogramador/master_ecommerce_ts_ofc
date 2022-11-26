import { ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { registersParticipant } from '@src/app/ObjectsOfUse/RegistersParticipant'
import { clientepfDataOne, clientepfDataTwo } from '@src/Modules/Clientes/Clientepf/Data/ClientepfData'

type ClientepfSeed = ClientepfModel
// type ClientepfSeed = Omit<ClientepfModel, 'id'>

export const clientepfSeedOne: ClientepfSeed = {
    ...clientepfDataOne.args,
    registers: registersParticipant,
    id: clientepfDataOne.id,
}

export const clientepfSeedTwo: ClientepfSeed = {
    ...clientepfDataOne.args,
    registers: registersParticipant,
    id: clientepfDataTwo.id
}

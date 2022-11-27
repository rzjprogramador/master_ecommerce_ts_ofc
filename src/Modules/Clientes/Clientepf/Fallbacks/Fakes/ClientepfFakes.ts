import { ArgsCreateClientepf, ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { RegistersParticipant, StatusOperational } from '@src/App/Contracts/Registers.contracts'

type ClientepfFake = ClientepfModel

// Aux
// let mockStatusOperational: StatusOperational

export const clientepfFakeOne: ClientepfFake = {
    id: '1',
    idb: '1',
    nome: 'fakenomeone',
    sobrenome: 'fake sobrenome one',
    cpf: '11122233344',
    token: 'faketokenone',
    registers: {
        createdAt: 'one',
        updatedAt: 'one',
        removedAt: 'one',
        statusActive: 'Desativado'
    },
}

export const clientepfFakeTwo: ClientepfFake = {
    id: '2',
    idb: '2',
    nome: 'fakenometwo',
    sobrenome: 'fake sobrenome two',
    cpf: '11122233355',
    token: 'faketokentwo',
    registers: {
        createdAt: 'two',
        updatedAt: 'two',
        removedAt: 'two',
        statusActive: 'Desativado'
    },
}


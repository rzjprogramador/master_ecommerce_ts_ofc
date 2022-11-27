import { ArgsCreateClientepf } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { RegistersParticipant, StatusOperational } from '@src/App/Contracts/Registers.contracts'

type ClientepfFake = {
    id: string
    args: ArgsCreateClientepf
    records: RegistersParticipant
}

// Aux
// let mockStatusOperational: StatusOperational

export const clientepfFakeOne: ClientepfFake = {
    id: '1',
    args: {
        nome: 'fakenomeone',
        sobrenome: 'fake sobrenome one',
        cpf: '11122233344',
        token: 'faketokenone',
    },
    records: {
        createdAt: 'one',
        updatedAt: 'one',
        removedAt: 'one',
        statusActive: 'Desativado'
    },
}

export const clientepfFakeTwo: ClientepfFake = {
    id: '2',
    args: {
        nome: 'fakenometwo',
        sobrenome: 'fake sobrenome two',
        cpf: '11122233355',
        token: 'faketokentwo',
    },
    records: {
        createdAt: 'two',
        updatedAt: 'two',
        removedAt: 'two',
        statusActive: 'Desativado'
    },
}


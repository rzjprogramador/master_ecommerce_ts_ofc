import { ArgsCreateClientepf } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { RegistersParticipant } from '@src/app/Contracts/Registers.contracts'

type ClientepfData = {
    id: string
    args: ArgsCreateClientepf
    records: RegistersParticipant
}

export const clientepfVariantesOne: ClientepfData = {
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

export const clientepfVariantesTwo: ClientepfData = {
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


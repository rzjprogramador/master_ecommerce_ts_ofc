import { FakeClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'


export const clientepfFakeOne: FakeClientepfModel = {
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

export const clientepfFakeTwo: FakeClientepfModel = {
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

// FOR UPDATE

export const clientepfFakeUpdateOne: FakeClientepfModel = {
    nome: 'updatedNome',
    sobrenome: 'udpdatedSobrenome',
    cpf: '11122233344',
    token: 'faketokenone',
    registers: {
        createdAt: 'one',
        updatedAt: 'one',
        removedAt: 'one',
        statusActive: 'Desativado'
    },
}


import { FakeClientepfModelNoId, FakeClientepfUpdate } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { clientepfSeedOne } from '@src/Modules/Clientes/Clientepf/Fallbacks/Seeds/ClientepfSeeds'


export const clientepfFakeNoIdOne: FakeClientepfModelNoId = {
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

export const clientepfFakeNoIdTwo: FakeClientepfModelNoId = {
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

// FOR UPDATE : VAI ATUALIZAR SEEDS

export const clientepfFakeUpdateSeedOne: FakeClientepfUpdate = {
    id: 'seedIdOne',
    idb: 'seedIdbOne',
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


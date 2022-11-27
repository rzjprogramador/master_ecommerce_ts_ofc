import { ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'


export const clientepfFakeOne: ClientepfModel = {
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

export const clientepfFakeTwo: ClientepfModel = {
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


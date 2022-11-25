import { ArgsCreateClientepf, ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { TypeCliente } from '@src/Modules/Clientes/_GlobalClientes/Contracts/ClientesGlobalContract'
import { RecordsDNAParticipant } from '@src/app/contracts/records_dna.contracts'

import { vi, describe, it, expect } from 'vitest'

type VariantesClientepf = {
    pessoa: TypeCliente
    args: ArgsCreateClientepf
    records: RecordsDNAParticipant
}

export const clientepfVariantesOne: VariantesClientepf = {
    pessoa: 'Pessoa Fisica',
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

export const clientepfVariantesTwo: VariantesClientepf = {
    pessoa: 'Pessoa Juridica',
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


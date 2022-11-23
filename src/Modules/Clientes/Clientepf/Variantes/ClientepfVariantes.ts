import { ArgsCreateClientepf, ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { TypeCliente } from '@src/Modules/Clientes/_GlobalClientes/Contracts/ClientesGlobalContract'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { generateID } from '@src/app/helpers/generators/records_generators'
import { RecordsDNAParticipant } from '@src/app/contracts/records_dna.contracts'


type VariantesClientepf = {
    pessoa: TypeCliente
    fakeArgsClientepfOne: ArgsCreateClientepf
    nomeCompleto: string
    records: RecordsDNAParticipant
}

export const clientepfVariantes: VariantesClientepf = {
    pessoa: 'Pessoa Fisica',
    nomeCompleto: `nome + sobrenome`,
    // nomeCompleto: this.pessoa,
    fakeArgsClientepfOne: {
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
    //TODO: PEGAR PŔOPS NO PROPRIO OBJ >>
    // nomeCompleto: `${this.fakeArgsClientepfOne.nome} ${this.fakeArgsClientepfOne.sobrenome}`

}

/**
 * SEEDS
*/

export const clientepfSeedOne: ClientepfModel = {
    ...clientepfVariantes.fakeArgsClientepfOne,
    records: recordsDNAParticipant,
    id: generateID(),
    nomeCompleto: clientepfVariantes.nomeCompleto,
    pessoa: clientepfVariantes.pessoa,
    typeCliente: clientepfVariantes.pessoa
}

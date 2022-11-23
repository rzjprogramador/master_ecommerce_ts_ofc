import { ArgsCreateClientepf, ClientepfModel, TypeCliente } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { generateID } from '@src/app/helpers/generators/records_generators'


type VariantesClientepf = {
    typeCliente: TypeCliente
    fakeArgsClientepfOne: ArgsCreateClientepf
    nomeCompleto: string
}

export const variantesClientepf: VariantesClientepf = {
    typeCliente: 'Pessoa Fisica',
    fakeArgsClientepfOne: {
        nome: 'fakenomeone',
        sobrenome: 'fake sobrenome one',
        cpf: '11122233344',
        token: 'faketokenone'
    },
    nomeCompleto: `nome + sobrenome`,
    //TODO: PEGAR PŔOPS NO PROPRIO OBJ >>
    // nomeCompleto: `${this.fakeArgsClientepfOne.nome} ${this.fakeArgsClientepfOne.sobrenome}`

}

/**
 * SEEDS
*/

export const clientepfSeedOne: ClientepfModel = {
    ...variantesClientepf.fakeArgsClientepfOne,
    records: recordsDNAParticipant,
    id: generateID(),
    nomeCompleto: variantesClientepf.nomeCompleto,
    typeCliente: variantesClientepf.typeCliente
}

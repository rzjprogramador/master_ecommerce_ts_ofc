import { generateID } from "@src/app/helpers/generators/records_generators"
import { ClientepfModel, CreateClientepfMaker } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { useClienteGlobalPrototype } from '@src/Modules/Clientes/_GlobalClientes/MethodsPrototype/UseClientesGlobalPrototype.prototype'
import { clientepfVariantesOne } from '@src/Modules/Clientes/Clientepf/Variantes/ClientepfVariantes.variantes'

export const createClientepfMaker: CreateClientepfMaker = async ({ nome, sobrenome, cpf, token }) => {
    const clientepf: ClientepfModel = Object.create(useClienteGlobalPrototype)
    clientepf.nome = nome
    clientepf.sobrenome = sobrenome
    clientepf.cpf = cpf
    clientepf.token = token
    clientepf.pessoa = clientepfVariantesOne.pessoa
    clientepf.nomeCompleto = `${clientepf.nome} ${clientepf.sobrenome}`
    clientepf.typeCliente = clientepf.pessoa
    clientepf.id = generateID()
    clientepf.records = recordsDNAParticipant

    // clientepf.nomeCompleto = await clientepf.getNameCompleted()
    // clientepf.typeCliente = await clientepf.getIdentificator()
    // const transformEntity = { ...clientepf, records }

    return clientepf
}

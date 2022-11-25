import { generateID } from "@src/app/helpers/generators/records_generators"
import { CreateClientepf, ArgsCreateClientepf } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { useClienteGlobalPrototype } from '@src/Modules/Clientes/_GlobalClientes/MethodsPrototype/UseClientesGlobalPrototype.prototype'
import { clientepfVariantesOne } from '@src/Modules/Clientes/Clientepf/Variantes/ClientepfVariantes.variantes'

export const createClientepf = async ({ nome, sobrenome, cpf, token }: ArgsCreateClientepf) => {
    const clientepf = Object.create(useClienteGlobalPrototype)
    clientepf.nome = nome
    clientepf.sobrenome = sobrenome
    clientepf.cpf = cpf
    clientepf.token = token
    clientepf.pessoa = clientepfVariantesOne.pessoa
    clientepf.nomeCompleto = `${clientepf.nome} ${clientepf.sobrenome}`
    // clientepf.nomeCompleto = await clientepf.getNameCompleted()
    clientepf.typeCliente = clientepf.pessoa
    // clientepf.typeCliente = await clientepf.getIdentificator()
    clientepf.id = generateID()
    clientepf.records = recordsDNAParticipant

    // const transformEntity = { ...clientepf, records }

    return clientepf
}

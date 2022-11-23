import { generateID } from "@src/app/helpers/generators/records_generators"
import { CreateClientepf } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { useClientepfPrototype } from '@src/Modules/Clientes/Clientepf/Entity/MethodsPrototype/UseClientepfPrototype.prototype'

export const createClientepf: CreateClientepf = async ({ nome, sobrenome, cpf, token }) => {
    const clientepf = Object.create(useClientepfPrototype)
    clientepf.nome = nome
    clientepf.sobrenome = sobrenome
    clientepf.cpf = cpf
    clientepf.token = token
    clientepf.nomeCompleto = await clientepf.getNameCompleted()
    clientepf.typeCliente = await clientepf.getIdentificator()
    clientepf.id = clientepf.id ?? generateID()
    const records = recordsDNAParticipant
    const transformEntity = { ...clientepf, records }
    return await transformEntity
}

import { generateID } from "@src/app/Helpers/generators/records_generators"
import { ClientepfModel, CreateClientepfMaker } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { registersParticipant } from '@src/app/ObjectsOfUse/RegistersParticipant'
import { clientesMethodsProto } from '@src/Modules/Clientes/_GlobalClientes/MethodsProto/ClientesMethodsProto.prototype'

export const createClientepfMaker: CreateClientepfMaker = async ({ nome, sobrenome, cpf, token }) => {
    const clientepf: ClientepfModel = Object.create(clientesMethodsProto)
    clientepf.nome = nome
    clientepf.sobrenome = sobrenome
    clientepf.cpf = cpf
    clientepf.token = token
    clientepf.id = clientepf.id ?? generateID()
    clientepf.registers = registersParticipant
    return clientepf
}

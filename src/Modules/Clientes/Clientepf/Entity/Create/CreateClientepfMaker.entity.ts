import { ClientepfModel, CreateClientepfMaker } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { registersParticipant } from '@src/App/ObjectsOfUse/RegistersParticipant'
import { clientesMethodsProto } from '@src/Modules/Clientes/_GlobalClientes/MethodsProto/ClientesMethodsProto.prototype'

export const createClientepfMaker: CreateClientepfMaker = async ({ nome, sobrenome, cpf, token }) => {
    const clientepf: ClientepfModel = Object.create(clientesMethodsProto)
    clientepf.nome = nome
    clientepf.sobrenome = sobrenome
    clientepf.cpf = cpf
    clientepf.token = token
    clientepf.registers = registersParticipant
    return clientepf
}

/*
import { generateID } from "@src/App/Helpers/generators/records_generators"

    Clientepf.id = clientepf.id ?? generateID()
    clientepf.idb = clientepf.idb ?? generateID()
*/

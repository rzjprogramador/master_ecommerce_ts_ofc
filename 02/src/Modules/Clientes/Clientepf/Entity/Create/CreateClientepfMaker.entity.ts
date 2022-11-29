import { ClientepfModel, CreateClientepfMaker } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { registersParticipant } from '@src/App/ObjectsOfUse/RegistersParticipant'
import { clientesMethodsProto } from '@src/Modules/Clientes/_AllClientes/MethodsProto/ClientesMethodsProto.prototype'

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
* NAO GERAR ID | IDB NA ENTITY
*/

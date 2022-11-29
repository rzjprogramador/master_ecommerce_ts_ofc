import { registersParticipant } from '@src/App/ObjectsOfUse/RegistersParticipant'
import { CreateUserBase, ArgsCreateUser } from './UserContracts'
import { userMethodsProto } from './UserMethodsProto'


export const createUserBase: CreateUserBase = async (
    { primeiroNome, restanteNome, email, typeUser }
) => {
    const user: ArgsCreateUser = Object.create(userMethodsProto)
    user.primeiroNome = primeiroNome
    user.restanteNome = restanteNome
    user.email = email
    user.typeUser = typeUser
    user.registers = registersParticipant

    return user
}
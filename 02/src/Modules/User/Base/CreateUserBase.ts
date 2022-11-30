import { registersParticipant } from '@src/App/ObjectsOfUse/RegistersParticipant'
import { CreateUserBaseTypeFN, ArgsCreateUser } from './UserContracts'
import { userMethodsProto } from './UserMethodsProto'


export const createUserBase: CreateUserBaseTypeFN = async (
    { primeiroNome, restanteNome, email, typeUser }
) => {
    const user: ArgsCreateUser = Object.create(userMethodsProto)
    user.primeiroNome = primeiroNome
    user.restanteNome = restanteNome
    user.email = email
    user.typeUser = 'default' || typeUser
    // user.registers = registersParticipant

    return user
}
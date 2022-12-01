import { CreateUserBaseFN, ArgsCreateUser } from '@src/Modules/User/Core/Contracts/UserContracts'
import { userMethodsProto } from '@src/Modules/User/Methods/UserMethodsProto'


export const createUserBase: CreateUserBaseFN = async (
    { primeiroNome, complementoNome: restanteNome, email, typeUser }
) => {
    const user: ArgsCreateUser = Object.create(userMethodsProto)
    user.primeiroNome = primeiroNome
    user.complementoNome = restanteNome
    user.email = email
    user.typeUser = 'default' || typeUser

    return user
}
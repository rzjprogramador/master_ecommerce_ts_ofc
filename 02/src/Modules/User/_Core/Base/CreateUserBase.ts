import { CreateUserBaseFN, ArgsCreateUser } from '@src/Modules/User/_Core/Contracts/UserContracts'
import { userMethodsProto } from '@src/Modules/User/Methods/UserMethodsProto'


export const createUserBase: CreateUserBaseFN = async (
	{ primeiroNome, complementoNome, email, cpf, typeUser }
) => {
	const user: ArgsCreateUser = Object.create(userMethodsProto)
	user.primeiroNome = primeiroNome
	user.complementoNome = complementoNome
	user.email = email
	user.cpf = cpf
	user.typeUser = typeUser

	return user
}

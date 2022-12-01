import { CreateUserBaseFN, ArgsCreateUser } from '@src/Modules/User/Core/Contracts/UserContracts'
import { userMethodsProto } from '@src/Modules/User/Methods/UserMethodsProto'


export const createUserBase: CreateUserBaseFN = async (
	{ primeiroNome, complementoNome, email, cpf, cnpj, razaoSocial, typeUser }
) => {
	const user: ArgsCreateUser = Object.create(userMethodsProto)
	user.primeiroNome = primeiroNome
	user.complementoNome = complementoNome
	user.email = email
	user.cpf = cpf ?? null
	user.cnpj = cnpj ?? null
	user.razaoSocial = razaoSocial ?? null
	user.typeUser = typeUser

	return user
}

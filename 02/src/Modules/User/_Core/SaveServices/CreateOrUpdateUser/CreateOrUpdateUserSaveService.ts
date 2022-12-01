import { generateID } from '@src/App/Helpers/generators/records_generators'
import { registersParticipant } from '@src/App/ObjectsOfUse/RegistersParticipant'
import { createUserBase } from '@src/Modules/User/_Core/Base/CreateUserBase'
import { ArgsCreateUser, CreateOrUpdateUserSaveServiceFN } from '@src/Modules/User/_Core/Contracts/UserContracts'
import { createUserRepoMediator, updateUserRepoMediator } from '@src/Modules/User/Mediators/RepoMediatorUser'


export const createOrUpdateUserSaveService = async (user: ArgsCreateUser) => {
	if (user.id) {
		const id = user.id
		return await updateUserRepoMediator(id, user)
	}

	const createModelEntityBase = await createUserBase(user)

	const definePropsUser = async (user: ArgsCreateUser) => {
		if (user.typeUser === 'user_default') {
			return await user.getPropsUserDefault(user.cpf)
		}
		return await user.getPropsUserDefault(user.cpf)
	}

	const propsContext = await definePropsUser(createModelEntityBase)

	const complement = {
		id: generateID(),
		registers: registersParticipant,
		propsContext,
		// foo: 'barrr'
	}

	const completedEntity = {
		...createModelEntityBase,
		...complement,

	}

	return await createUserRepoMediator(completedEntity)
}

/*
primeiroNome: modelEntityBase?.primeiroNome,
complementoNome: modelEntityBase.complementoNome,
email: modelEntityBase.email,
typeUser: modelEntityBase.typeUser,
propsContext: _ ,
*/

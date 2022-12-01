import { generateID } from '@src/App/Helpers/generators/records_generators'
import { registersParticipant } from '@src/App/ObjectsOfUse/RegistersParticipant'
import { createUserBase } from '@src/Modules/User/Core/Base/CreateUserBase'
import { ArgsCreateUser, CreateOrUpdateUserSaveServiceFN } from '@src/Modules/User/Core/Contracts/UserContracts'
import { createUserRepoMediator, updateUserRepoMediator } from '@src/Modules/User/Mediators/RepoMediatorUser'


export const createOrUpdateUserSaveService = async (user: ArgsCreateUser | any) => {
    if (user.id) {
        const id = user.id
        return await updateUserRepoMediator(id, user)
    }

    const modelEntityBase = await createUserBase(user)
    const complement = {
        id: generateID(),
        registers: registersParticipant
    }

    const completedEntity = {
        ...modelEntityBase,
        ...complement
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
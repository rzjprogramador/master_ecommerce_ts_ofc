import { generateID } from '@src/App/Helpers/generators/records_generators'
import { registersParticipant } from '@src/App/ObjectsOfUse/RegistersParticipant'
import { createUserBase } from '@src/Modules/User/Base/CreateUserBase'
import { CreateUserTypeFN, CreateUserBaseTypeFN } from '@src/Modules/User/Base/UserContracts'
import { userCreateMediatorRepository, userUpdateteMediatorRepository } from '@src/Modules/User/Mediators/UserMediatorRepository'


export const createOrUpdateUserServiceSave: CreateUserTypeFN = async (user) => {
    if (user.id) {
        const id = user.id
        return await userUpdateteMediatorRepository(id, user)
    }

    const modelEntityBase = await createUserBase(user)

    const completedEntity = {
        primeiroNome: modelEntityBase.primeiroNome,
        restanteNome: modelEntityBase.restanteNome,
        email: modelEntityBase.email,
        typeUser: modelEntityBase.typeUser,
        // propsContext: _ ,

        id: generateID(),
        registers: registersParticipant,
    }

    // id: generateID(),

    return await userCreateMediatorRepository(completedEntity)
}
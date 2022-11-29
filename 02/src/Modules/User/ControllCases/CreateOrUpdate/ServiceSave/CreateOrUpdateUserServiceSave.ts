import { createUserBase } from '@src/Modules/User/Base/CreateUserBase'
import { CreateOrUpdateUserServiceSave } from '@src/Modules/User/Base/UserContracts'
import { userCreateMediatorRepository, userUpdateteMediatorRepository } from '@src/Modules/User/Mediators/UserMediatorRepository'


export const createOrUpdateUserServiceSave: CreateOrUpdateUserServiceSave = async (user) => {
    if (user.id) {
        const id = user.id
        // TODO -- MNADAR PRO REPO ACHAR O USER - PARA FAZER UPDATE
        return await userUpdateteMediatorRepository(id,)
    }

    const modelEntityBase = await createUserBase(user)
    return await userCreateMediatorRepository(modelEntityBase)
}
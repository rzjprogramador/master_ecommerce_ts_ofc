import { CreateUserTypeFN, UserUpdateMediatorRepository } from '@src/Modules/User/Base/UserContracts'
import { userFactoryInUseRepository } from '@src/Modules/User/Factorys/UserFactoryInUseRepository'

export const userCreateMediatorRepository: CreateUserTypeFN = async (user) => {
    return await userFactoryInUseRepository.on.create(user)
}

export const userUpdateteMediatorRepository: UserUpdateMediatorRepository = async (id) => {
    const newEntity = null // TODO -- ACHAR O USER COM ID E FAZER UPDATE NO REPO
    return await userFactoryInUseRepository.on.updateById(id, newEntity)
}
import { UserCreateMediatorRepository, UserUpdateMediatorRepository } from '@src/Modules/User/Base/UserContracts'
import { userFactoryInUseRepository } from '@src/Modules/User/Factorys/UserFactoryInUseRepository'

export const userCreateMediatorRepository: UserCreateMediatorRepository = async (cliente) => {
    return await userFactoryInUseRepository.on.create(cliente)
}

export const userUpdateteMediatorRepository: UserUpdateMediatorRepository = async (id) => {
    const newEntity = null // TODO -- ACHAR O USER COM ID E FAZER UPDATE NO REPO
    return await userFactoryInUseRepository.on.update(id, newEntity)
}
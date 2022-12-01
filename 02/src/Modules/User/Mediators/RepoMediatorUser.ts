import { CreateUserFN, UpdateUserFN } from '@src/Modules/User/_Core/Contracts/UserContracts'
import { factoryUserRepositoryInUse } from '@src/Modules/User/_Core/Factorys/FactoryUserRepositoryInUse'

export const createUserRepoMediator: CreateUserFN = async (user) => {
    return await factoryUserRepositoryInUse.on.create(user)
}

export const updateUserRepoMediator: UpdateUserFN = async (id, newData) => {
    const newEntity = null // TODO -- ACHAR O USER COM ID E FAZER UPDATE NO REPO
    return await factoryUserRepositoryInUse.on.updateById(id, newEntity)
}

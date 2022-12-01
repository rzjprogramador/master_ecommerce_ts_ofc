import { userRepositoryMemory } from '../../../../../Memory/User/UserRepositoryMemory'


export const optionsFactoryUserRepositoryInUse = {
    memory: userRepositoryMemory,
    // firebase: userRepositoryFirebase,
}

export const factoryUserRepositoryInUse = {
    on: optionsFactoryUserRepositoryInUse.memory
}

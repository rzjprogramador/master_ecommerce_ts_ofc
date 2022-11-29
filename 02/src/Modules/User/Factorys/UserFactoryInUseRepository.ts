import { userRepositoryMemory } from '../../../../Memory/User/UserRepositoryMemory'


export const optionsUserFactoryInUseRepository = {
    memory: userRepositoryMemory,
    // firebase: userRepositoryFirebase,
}

export const userFactoryInUseRepository = {
    on: optionsUserFactoryInUseRepository.memory
}

import { ClientepfRepositoryMemory } from '../../../../../ReposInMemory/Clientepf/Clientepf.repository.memory'

/**
 * REPOSITORIOS
 */

export const optionsClientepfRepositories = {
    memory: new ClientepfRepositoryMemory,
}

export const makerClientepfRepositoryInUse = {
    on: optionsClientepfRepositories.memory
}

/**
 * ...
 */


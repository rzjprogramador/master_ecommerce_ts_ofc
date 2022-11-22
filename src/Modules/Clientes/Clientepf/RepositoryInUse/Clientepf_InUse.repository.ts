import { ClientepfRepositoryMemory } from '../../../../../ReposInMemory/Clientepf/Clientepf.repository.memory'

export const optionsClientepfRepositories = {
    memory: new ClientepfRepositoryMemory,
}

export const clientepfRepositoryInUse = {
    on: optionsClientepfRepositories.memory
}
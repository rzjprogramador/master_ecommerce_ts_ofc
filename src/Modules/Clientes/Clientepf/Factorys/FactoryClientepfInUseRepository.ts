import { ClientepfRepositoryMemory } from '../../../../../Memory/ReposInMemory/Clientepf/Clientepf.repository.memory'

export const optionsClientepfRepositories = {
    memory: new ClientepfRepositoryMemory,
}

export const useMakerClientepfRepository = {
    on: optionsClientepfRepositories.memory
}

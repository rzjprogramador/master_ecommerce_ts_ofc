import { ClientepfRepositoryMemory } from '../../../../../Memory/ClienteRepoitoriesMemory/Clientepf/ClientepfRepositoryMemory'

export const optionsClientepfRepositories = {
    memory: new ClientepfRepositoryMemory,
}

export const useMakerClientepfRepository = {
    on: optionsClientepfRepositories.memory
}

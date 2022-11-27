import { ClientepfRepositoryMemory } from '../../../../../Memory/ReposInMemory/Clientepf/Clientepf.repository.memory'

export const optionsMakerRepositoryClientepf = {
    memory: new ClientepfRepositoryMemory,
}

export const makerRepositoryClientepf = {
    on: optionsMakerRepositoryClientepf.memory
}

import { ClientepfRepositoryMemory } from '../../../../../Memory/ClienteRepoitoriesMemory/Clientepf/ClientepfRepositoryMemory'
import { ClientepfRepositoryFirebase } from '../../../../../Providers/DB/Firebase/RepositoriesFirebase/Clientepf/ClientepfRepositoryFirebase'

export const optionsClientepfRepositories = {
    memory: ClientepfRepositoryMemory,
    firebase: ClientepfRepositoryFirebase,
}

export const useMakerClientepfRepository = {
    on: optionsClientepfRepositories.firebase
}

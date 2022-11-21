import { ClienteFisicoRepositoryMemory } from '../../../../../repositories_inmemory/clientes/cliente_fisico_repository_memory'

export const optionsClienteFisicoRepositories = {
    memory: new ClienteFisicoRepositoryMemory,
}

export const clienteFisicoRepositoryInUse = {
    inUse: optionsClienteFisicoRepositories.memory
}
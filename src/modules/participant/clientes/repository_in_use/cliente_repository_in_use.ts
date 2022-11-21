import { ClienteRepositoryMemory } from '../../../../../repositories_inmemory/cliente/cliente_repository_memory'

export const optionsClienteRepositories = {
    memory: new ClienteRepositoryMemory,
}

export const clienteRepositoryInUse = {
    inUse: optionsClienteRepositories.memory
}
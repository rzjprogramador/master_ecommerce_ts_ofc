import { ClienteRepositoryMemory } from './../../../../../repositories_inmemory/cliente_repositories/cliente_repository_memory'

const optionsClienteRepositories = {
    memory: new ClienteRepositoryMemory,
}

export const clienteRepositoryInUse = {
    inUse: optionsClienteRepositories.memory
}
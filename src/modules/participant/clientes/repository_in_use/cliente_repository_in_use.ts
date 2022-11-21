import { ClienteRepositoryMemory } from '../../../../../repositories_inmemory/cliente/cliente_repository_memory'

const optionsClienteRepositories = {
    memory: new ClienteRepositoryMemory,
}

export const clienteRepositoryInUse = {
    inUse: optionsClienteRepositories.memory
}
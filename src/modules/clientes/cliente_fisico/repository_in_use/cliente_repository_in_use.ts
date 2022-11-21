import { ClienteFisicoRepositoryMemory } from '../../../../../repositories_inmemory/clientes/cliente_fisico_repository_memory'

export const optionsClienteRepositories = {
    memory: new ClienteFisicoRepositoryMemory,
}

export const clienteRepositoryInUse = {
    inUse: optionsClienteRepositories.memory
}
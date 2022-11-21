import { makerCliente } from '@src/modules/participant/clientes/makers/makers_cliente'
import { CreateClienteService } from '@src/modules/participant/clientes/cases_entity/create/cliente.contracts'
import { clienteRepositoryInUse } from '@src/modules/participant/clientes/repository_in_use/cliente_repository_in_use'

export const createClienteService: CreateClienteService = async (cliente) => {
    const modelEntity = await makerCliente.newEntity.create(cliente)
    return await clienteRepositoryInUse.inUse.create(modelEntity)
}
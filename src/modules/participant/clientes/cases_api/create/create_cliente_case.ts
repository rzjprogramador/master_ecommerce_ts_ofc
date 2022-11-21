import { makerCliente } from '@src/modules/participant/clientes/makers/makers_cliente'
import { CreateClienteCase } from '@src/modules/participant/clientes/entity/cliente.contracts'
import { clienteRepositoryInUse } from '@src/modules/participant/clientes/repository_in_use/cliente_repository_in_use'

export const createClienteCase: CreateClienteCase = async (cliente) => {
    const modelEntity = await makerCliente.newEntity.create(cliente)
    return await clienteRepositoryInUse.inUse.create(modelEntity)
}
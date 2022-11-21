import { makerCliente } from '@src/modules/clientes/cliente_fisico/makers/makers_cliente'
import { CreateClienteFisicoService } from '@src/modules/clientes/cliente_fisico/cases_entity/_props/cliente_fisico.contracts'
import { clienteRepositoryInUse } from '@src/modules/clientes/cliente_fisico/repository_in_use/cliente_repository_in_use'

export const createClienteFisicoService: CreateClienteFisicoService = async (cliente) => {
    const modelEntity = await makerCliente.newEntity.execute(cliente)
    return await clienteRepositoryInUse.inUse.create(modelEntity)
}
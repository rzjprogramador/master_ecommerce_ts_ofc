import { makerClienteFisico } from '@src/modules/clientes/cliente_fisico/makers/makers_cliente_fisico'
import { CreateClienteFisicoService } from '@src/modules/clientes/_data/contracts_clientes/cliente_fisico.contracts'
import { clienteFisicoRepositoryInUse } from '@src/modules/clientes/cliente_fisico/repository_in_use/cliente_fisico_repository_in_use'

export const createClienteFisicoService: CreateClienteFisicoService = async (cliente) => {
    const modelEntity = await makerClienteFisico.newEntity.execute(cliente)
    return await clienteFisicoRepositoryInUse.inUse.create(modelEntity)
}
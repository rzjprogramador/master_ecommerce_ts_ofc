import { CreateClientepfService } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { createClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Variantes/Mediators/ClientepfByMediatorRepository'
import { createClientepf } from '@src/Modules/Clientes/Clientepf/Entity/Create/CreateClientepf.entity'

export const createClientepfService: CreateClientepfService = async (cliente) => {
    const modelEntity = await createClientepf(cliente)
    return await createClientepfByMediatorRepository(modelEntity)
}
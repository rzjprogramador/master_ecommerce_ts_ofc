import { CreateClientepfService } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { createClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Mediators/ClientepfByMediatorRepository'
import { createClientepfMaker } from '@src/Modules/Clientes/Clientepf/Entity/Create/CreateClientepf.entity'

export const createClientepfService: CreateClientepfService = async (cliente) => {
    const modelEntity = await createClientepfMaker(cliente)
    return await createClientepfByMediatorRepository(modelEntity)
}
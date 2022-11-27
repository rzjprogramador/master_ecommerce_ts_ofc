import { CreateOrUpdateClientepfSave } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { createClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Mediators/ClientepfByMediatorRepository'
import { createClientepfMaker } from '@src/Modules/Clientes/Clientepf/Entity/Create/CreateClientepfMaker.entity'

export const createOrUpdateClientepfSave: CreateOrUpdateClientepfSave = async (cliente) => {
    const modelEntity = await createClientepfMaker(cliente)
    return await createClientepfByMediatorRepository(modelEntity)
}
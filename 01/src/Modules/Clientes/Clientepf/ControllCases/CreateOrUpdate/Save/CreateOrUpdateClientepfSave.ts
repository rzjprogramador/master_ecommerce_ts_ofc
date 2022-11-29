import { makerCreateClientepfRepository } from '@src/Modules/Clientes/Clientepf/Factorys/FactoryClientepfInUseRepository'
import { CreateOrUpdateClientepfSave } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { createClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Mediators/CreateClientepfByMediatorRepository'
import { createClientepfMaker } from '@src/Modules/Clientes/Clientepf/Entity/Create/CreateClientepfMaker.entity'
import { updateClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Mediators/UpdateClientepfByMediatorRepository'

export const createOrUpdateClientepfSave: CreateOrUpdateClientepfSave = async (cliente) => {
    if (cliente.id) {
        const id = cliente.id
        const found = await (await makerCreateClientepfRepository.on.acessItems()).find(client => cliente.id === id)
        const newCliente = { ...found, ...cliente }
        return await updateClientepfByMediatorRepository(newCliente)
    }

    const modelEntity = await createClientepfMaker(cliente)
    return await createClientepfByMediatorRepository(modelEntity)
}
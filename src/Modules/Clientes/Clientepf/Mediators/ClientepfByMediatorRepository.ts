import { useMakerClientepfRepository } from '@src/Modules/Clientes/Clientepf/Factorys/FactoryClientepfInUseRepository'
import { CreateClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { objIDS } from '@src/App/ObjectsOfUse/ObjectIDS'

export const createClientepfByMediatorRepository: CreateClientepfByMediatorRepository = async (cliente) => {
    if (cliente.id) {
        const id = cliente.id
        const found = await (await useMakerClientepfRepository.on.acessItems()).find(client => cliente.id === id)
        return await { ...found, ...cliente }
    }
    const newCliente = { ...cliente, ...objIDS }
    return await useMakerClientepfRepository.on.create(newCliente)
}
import { useMakerClientepfRepository } from '@src/Modules/Clientes/Clientepf/Factorys/FactoryClientepfInUseRepository'
import { UpdateClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'


export const updateClientepfByMediatorRepository: UpdateClientepfByMediatorRepository = async (cliente) => {
    return await useMakerClientepfRepository.on.update(cliente)
}
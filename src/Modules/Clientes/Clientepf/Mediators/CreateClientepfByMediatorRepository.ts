import { useMakerClientepfRepository } from '@src/Modules/Clientes/Clientepf/Factorys/FactoryClientepfInUseRepository'
import { CreateClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'

export const createClientepfByMediatorRepository: CreateClientepfByMediatorRepository = async (cliente) => {
    return await useMakerClientepfRepository.on.create(cliente)
}
import { makerCreateClientepfRepository } from '@src/Modules/Clientes/Clientepf/Factorys/FactoryClientepfInUseRepository'
import { UpdateClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'


export const updateClientepfByMediatorRepository: UpdateClientepfByMediatorRepository = async (cliente) => {
    return await makerCreateClientepfRepository.on.update(cliente)
}
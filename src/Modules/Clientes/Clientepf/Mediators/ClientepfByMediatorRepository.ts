import { makerRepositoryClientepf } from '@src/Modules/Clientes/Clientepf/Makers/MakerRepositoryClientepf.makers'
import { CreateClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'

export const createClientepfByMediatorRepository: CreateClientepfByMediatorRepository = async (cliente) => {
    return await makerRepositoryClientepf.on.create(cliente)
}
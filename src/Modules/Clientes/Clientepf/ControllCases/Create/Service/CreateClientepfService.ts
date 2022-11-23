import { CreateClientepfService } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { makerRepositoryClientepf } from '@src/Modules/Clientes/Clientepf/Variantes/Makers/MakerRepositoryClientepf.makers'
import { createClientepf } from '@src/Modules/Clientes/Clientepf/Entity/Create/CreateClientepf.entity'

export const createClientepfService: CreateClientepfService = async (cliente) => {
    const modelEntity = await createClientepf(cliente)
    return await makerRepositoryClientepf.on.create(modelEntity)
}
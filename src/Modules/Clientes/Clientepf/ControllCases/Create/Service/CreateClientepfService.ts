import { CreateClientepfService } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { makerRepositoryClientepf } from '@src/Modules/Clientes/Variantes/Makers/MakerRepositoryClientepf.makers'
import { createClientepf } from '@src/Modules/Clientes/Clientepf/Entity/Create/CreateClientepf.entity'

export const createClientepfService: CreateClientepfService = async (cliente) => {
    const modelEntity = await createClientepf(cliente)
    return await makerRepositoryClientepf.on.create(modelEntity)
}
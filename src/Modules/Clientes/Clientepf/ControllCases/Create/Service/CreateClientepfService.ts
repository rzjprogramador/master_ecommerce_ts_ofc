import { CreateClientepfService } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { makerClientepfRepositoryInUse } from '@src/Modules/Clientes/Clientepf/Makers/MakersClientepf.makers'
import { createClientepf } from '@src/Modules/Clientes/Clientepf/Entity/ClientepfProps.entity'

export const createClientepfService: CreateClientepfService = async (cliente) => {
    const modelEntity = await createClientepf(cliente)
    return await makerClientepfRepositoryInUse.on.create(modelEntity)
}
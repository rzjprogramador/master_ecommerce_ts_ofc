import { makerEntityClientepf } from '@src/Modules/Clientes/Clientepf/Makers/MakersClientepf'
import { CreateClientepfService } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { clientepfRepositoryInUse } from '@src/Modules/Clientes/Clientepf/RepositoryInUse/Clientepf_InUse.repository'

export const createClientepfService: CreateClientepfService = async (cliente) => {
    const modelEntity = await makerEntityClientepf.on.create(cliente)
    return await clientepfRepositoryInUse.on.create(modelEntity)
}
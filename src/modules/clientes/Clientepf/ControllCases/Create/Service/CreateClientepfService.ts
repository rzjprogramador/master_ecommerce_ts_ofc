import { makerCreateClientepf } from '@src/modules/clientes/Clientepf/Makers/MakersClientepf'
import { CreateClientepfService } from '@src/modules/clientes/Contracts/Clientepf.contract'
import { clientepfRepositoryInUse } from '@src/modules/clientes/Clientepf/RepositoryInUse/Clientepf_InUse.repository'

export const createClientepfService: CreateClientepfService = async (cliente) => {
    const modelEntity = await makerCreateClientepf.on.create(cliente)
    return await clientepfRepositoryInUse.on.create(modelEntity)
}
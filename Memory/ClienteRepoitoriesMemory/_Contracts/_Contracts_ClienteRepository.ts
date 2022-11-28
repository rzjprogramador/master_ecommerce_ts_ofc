import { ID } from '@src/App/Contracts/ContractAppModules'
import { ClientepfModel } from '../../../src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'

export interface ClienteRepository {
    acessItems(): Promise<ClientepfModel[]>

    create(cliente: ClientepfModel): Promise<ClientepfModel>

    list(): Promise<ClientepfModel[]>

    update(cliente: ClientepfModel): Promise<ClientepfModel>

    remove(id: ID): Promise<boolean>
}
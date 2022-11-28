import { ClientepfModel } from '../../../src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'

export interface ClienteRepository {
    create(cliente: ClientepfModel): Promise<ClientepfModel>

    list(): Promise<ClientepfModel[]>

    update(cliente: ClientepfModel, newData: ClientepfModel): Promise<ClientepfModel>

    remove(id: ID): Promise<boolean>
}
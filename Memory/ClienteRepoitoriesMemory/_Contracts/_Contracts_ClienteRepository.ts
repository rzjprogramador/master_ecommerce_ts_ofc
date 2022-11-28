import { ClientepfModel } from '../../../src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'

export interface ClienteRepository {
    items: ClientepfModel[]
    // items?: Promise<ClientepfModel[]>

    acessItems(): Promise<ClientepfModel[]>

    create(cliente: ClientepfModel): Promise<ClientepfModel>

    list(): Promise<ClientepfModel[]>

    update(cliente: ClientepfModel): Promise<ClientepfModel>

    remove(id: string): Promise<boolean>
}
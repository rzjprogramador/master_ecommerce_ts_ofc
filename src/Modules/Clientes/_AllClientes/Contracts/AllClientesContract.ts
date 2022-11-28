import { ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'

export type TypeCliente = 'None' | 'Pessoa Fisica' | 'Pessoa Juridica'

export interface ClientesMethodsProto {
    nome?: string
    sobrenome?: string
    pessoa?: TypeCliente
    getNomeCompleto(): Promise<string>
    getIdentificador(): Promise<TypeCliente>
}

export interface ClienteRepository {
    items: ClientepfModel[]
    // items?: Promise<ClientepfModel[]>

    acessItems(): Promise<ClientepfModel[]>

    create(cliente: ClientepfModel): Promise<ClientepfModel>

    list(): Promise<ClientepfModel[]>

    update(cliente: ClientepfModel): Promise<ClientepfModel>

    remove(id: string): Promise<boolean>
}
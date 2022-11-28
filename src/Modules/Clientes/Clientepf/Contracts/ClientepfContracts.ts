import { RegistersParticipant } from '@src/App/Contracts/Registers.contracts'
import { HttpResponse } from '@src/App/Helpers/responses/http.contract'

export interface ClientepfModel {
    id?: string
    idb?: string
    token: string
    nome: string
    sobrenome: string
    cpf: string
    registers?: RegistersParticipant
}

export type FakeClientepfModelNoId = Omit<ClientepfModel, 'id' | 'idb'>

export type FakeClientepfUpdate = ClientepfModel
// export type FakeClientepfUpdate = Pick<ClientepfModel, 'id' | 'nome' | 'sobrenome'>

export type CreateClientepfMaker = (cliente: ArgsCreateClientepf) => Promise<ClientepfModel>

export type ArgsCreateClientepf = ClientepfModel
// export type ArgsCreateClientepf = Pick<ClientepfModel, 'nome' | 'sobrenome' | 'token' | 'cpf'>

export type CreateOrUpdateClientepfSave = (cliente: ArgsCreateClientepf) => Promise<ClientepfModel>

export type CreateClientepfByMediatorRepository = (cliente: ClientepfModel) => Promise<ClientepfModel>

export type UpdateClientepfByMediatorRepository = (cliente: ClientepfModel) => Promise<ClientepfModel>

export type CreateOrUpdateClientepfControll = (cliente: ArgsCreateClientepf) => Promise<HttpResponse<ClientepfModel | Error>>

export interface ClienteRepository {
    items: ClientepfModel[]
    // items?: Promise<ClientepfModel[]>

    acessItems(): Promise<ClientepfModel[]>

    create(cliente: ClientepfModel): Promise<ClientepfModel>

    list(): Promise<ClientepfModel[]>

    update(cliente: ClientepfModel): Promise<ClientepfModel>

    remove(id: string): Promise<boolean>
}




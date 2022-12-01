import { RegistersParticipant } from '@src/App/Contracts/Registers.contracts'
import { HttpResponse } from '@src/App/Helpers/responses/http.contract'

export interface UserModel {
    id?: string
    primeiroNome: string
    complementoNome: string
    email: string
    typeUser: TypeUser
    propsContext?: PropsClientepj | PropsClientepf
    registers?: RegistersParticipant
    getNomeCompleto?(): PropsUserMethodsProto
}

export type ArgsCreateUser = Pick<UserModel, 'id' | 'primeiroNome' | 'complementoNome' | 'email' | 'typeUser'>

interface PropsClientepj {
    cnpj: string
    razaoSocial: string
}

interface PropsClientepf {
    cpf: string
}

type TypeUser = 'default' | 'admin' | 'editor'

export type FakeUserBaseInstance = UserModel

// RESPONSE FAIL HANDLERS
type ResponseFailCreateUser = Promise<HttpResponse>
type ResponseFailUserService = any

// METODOS
export type CreateUserBaseFN = (user: ArgsCreateUser) => Promise<ArgsCreateUser | ResponseFailCreateUser>

export type CreateUserFN = (user: ArgsCreateUser) => Promise<UserModel | ResponseFailCreateUser>

export type CreateOrUpdateUserSaveServiceFN = (user: ArgsCreateUser) => Promise<ResponseFailUserService | UserModel | HttpResponse>

export type CreateOrUpdateUserControll = (user: ArgsCreateUser) => Promise<UserModel | Error>


// METHODS MEDIATOR >> SERVINDO PARA USO DOS METODOS REPOSITORY
export type ListUsersFN = () => Promise<UserModel[]>

export type AcessUserFN = () => Promise<UserModel>

export type UpdateUserFN = (id: string, newData: UserModel) => Promise<UserModel>

export type RemoveUserFN = (id: string) => Promise<boolean>

// PROTO
export interface PropsUserMethodsProto {
    primeiroNome?: string
    restanteNome?: string
    getNomeCompleto?(): Promise<string>
}

// REPO : BY ALL USERS
export interface UserRepository {
    items: UserModel[]
    // items?: Promise<UserModel[]>

    acessItems: AcessUserFN

    create: CreateUserFN

    list: ListUsersFN

    updateById: UpdateUserFN

    remove: RemoveUserFN
}
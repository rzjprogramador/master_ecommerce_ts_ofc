import { RegistersParticipant } from '@src/App/Contracts/Registers.contracts'
import { HttpResponse } from '@src/App/Helpers/responses/http.contract'

export interface UserModel {
    id?: string
    primeiroNome: string
    restanteNome: string
    email: string
    typeUser: TypeUser
    propsContext?: PropsClientepj | PropsClientepf
    registers?: RegistersParticipant
    getNomeCompleto?(): PropsUserMethodsProto
}

export type ArgsCreateUser = Pick<UserModel, 'id' | 'primeiroNome' | 'restanteNome' | 'email' | 'typeUser'>

interface PropsClientepj {
    cnpj: string
    razaoSocial: string
}

interface PropsClientepf {
    cpf: string
}

type TypeUser = 'default' | 'admin' | 'editor'

export type FakeBaseUser = UserModel

// RESPONSE FAIL HANDLERS
type ResponseFail = any | HttpResponse

// METODOS
export type CreateUserBaseFN = (user: ArgsCreateUser) => Promise<ArgsCreateUser | ResponseFail>

export type CreateUserFN = (user: ArgsCreateUser) => Promise<UserModel | ResponseFail>

export type CreateOrUpdateUserControll = (user: ArgsCreateUser) => Promise<UserModel | Error>


// METHODS MEDIATOR >> SERVINDO PARA USO DOS METODOS REPOSITORY
export type ListUserMediatorRepository = () => Promise<UserModel[]>

export type AcessItemsUserMediatorRepository = ListUserMediatorRepository

export type UpdateUserMediatorRepository = (id: string, newData: UserModel) => Promise<UserModel>

export type RemoveUserMediatorRepository = (id: string) => Promise<boolean>

// PROTO
export interface PropsUserMethodsProto {
    primeiroNome?: string
    restanteNome?: string
}

// REPO : BY ALL USERS
export interface UserRepository {
    items: UserModel[]
    // items?: Promise<UserModel[]>

    acessItems: AcessItemsUserMediatorRepository

    create: CreateUserFN

    list: ListUserMediatorRepository

    updateById: UpdateUserMediatorRepository

    remove: RemoveUserMediatorRepository
}
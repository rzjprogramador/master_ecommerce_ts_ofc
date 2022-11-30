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

/*

user.primeiroNome = primeiroNome
    user.restanteNome = restanteNome
    user.email = email
    user.typeUser = 'default' || typeUser
    user.registers = registersParticipant
*/

interface PropsClientepj {
    cnpj: string
    razaoSocial: string
}

interface PropsClientepf {
    cpf: string
}

type TypeUser = 'default' | 'admin' | 'editor'

export type FakeBaseUser = UserModel

// RESPONSE HANDLERS
type ResponseErrorHandle = any | HttpResponse

// METODOS
export type CreateUserBaseTypeFN = (user: ArgsCreateUser) => Promise<ArgsCreateUser | ResponseErrorHandle>
export type CreateUserTypeFN = (user: ArgsCreateUser) => Promise<UserModel | ResponseErrorHandle>

export type CreateOrUpdateUserControll = (user: ArgsCreateUser) => Promise<UserModel | Error>

// export type CreateOrUpdateUserServiceSave = (user: ArgsCreateUser) => Promise<UserModel>

// METHODS MEDIATOR >> SERVINDO PARA USO DOS METODOS REPOSITORY
export type UserListMediatorRepository = () => Promise<UserModel[]>

// export type UserCreateMediatorRepository = (user: ArgsCreateUser) => Promise<UserModel>

export type UserAcessItemListMediatorRepository = () => Promise<UserModel[]>

export type UserUpdateMediatorRepository = (id: string, newData: UserModel) => Promise<UserModel>

export type UserRemoveMediatorRepository = (id: string) => Promise<boolean>

//

// PROTO
export interface PropsUserMethodsProto {
    primeiroNome?: string
    restanteNome?: string
}

// REPO : BY ALL USERS
export interface UserRepository {
    items: UserModel[]
    // items?: Promise<UserModel[]>

    acessItems: UserAcessItemListMediatorRepository

    create: CreateUserTypeFN

    list: UserListMediatorRepository

    updateById: UserUpdateMediatorRepository

    remove: UserRemoveMediatorRepository
}
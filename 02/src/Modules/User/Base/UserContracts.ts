import { RegistersParticipant } from '@src/App/Contracts/Registers.contracts'

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

export type ArgsCreateUser = UserModel

interface PropsClientepj {
    cnpj: string
    razaoSocial: string
}

interface PropsClientepf {
    cpf: string
}

type TypeUser = 'default' | 'admin' | 'editor' | 'pessoa_fisica' | 'pessoa_juridica'

export type FakeBaseUser = UserModel

// METODOS
export type CreateUserBase = (user: ArgsCreateUser) => Promise<UserModel>

export type CreateOrUpdateUserControll = (user: ArgsCreateUser) => Promise<UserModel | Error>

export type CreateOrUpdateUserServiceSave = (user: ArgsCreateUser) => Promise<UserModel>

// METHODS MEDIATOR >> SERVINDO PARA USO DOS METODOS REPOSITORY
export type UserListMediatorRepository = () => Promise<UserModel[]>

export type UserCreateMediatorRepository = (user: ArgsCreateUser) => Promise<UserModel>

export type UserAcessItemListMediatorRepository = () => Promise<UserModel[]>

export type UserUpdateMediatorRepository = (id: string, newData: ArgsCreateUser) => Promise<UserModel>

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

    create: UserCreateMediatorRepository

    list: UserListMediatorRepository

    update: UserUpdateMediatorRepository

    remove: UserRemoveMediatorRepository
}
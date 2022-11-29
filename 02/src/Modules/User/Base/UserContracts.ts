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

// PROTO
export interface PropsUserMethodsProto {
    primeiroNome?: string
    restanteNome?: string
}
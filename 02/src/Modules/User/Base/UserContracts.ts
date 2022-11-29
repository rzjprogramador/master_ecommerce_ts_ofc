

export interface UserModel {
    id?: string
    primeiroNome: string
    restanteNome: string
    email: string
    typeUser: TypeUser
    propsContext?: PropsClientepj | PropsClientepf

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
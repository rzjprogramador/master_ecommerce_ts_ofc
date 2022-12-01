import { RegistersParticipant } from '@src/App/Contracts/Registers.contracts'
import { HttpResponse } from '@src/App/Helpers/responses/http.contract'

export interface UserModel {
	id?: string
	primeiroNome: string
	complementoNome: string
	email: string
	cpf: string
	typeUser: TypeUser
	propsContext?: OptionsUserProps
	registers?: RegistersParticipant
	getNomeCompleto?(): PropsUserMethodsProto
	getPropsUserDefault?(cpf: string): PropsUserMethodsProto
}

export type ArgsCreateUser = Omit<UserModel, 'registers'>

type OptionsUserProps = PropsUserDefault

type PropsUserDefault = { cpf?: string }

type TypeUser = 'user_default' | 'admin' | 'editor'

export type FakeUserBaseInstance = UserModel

// RESPONSE FAIL HANDLERS
type ResponseFailCreateUser = Promise<any>

type ResponseSucessCreateUserService = Promise<UserModel>
type ResponseFailCreateUserService = any //Promise<Error>

// METODOS
export type CreateUserBaseFN = (user: ArgsCreateUser) => Promise<ArgsCreateUser> // INFLUENCIA CRIACAO USER NO SERVICE

export type CreateUserFN = (user: ArgsCreateUser) => Promise<UserModel & ResponseFailCreateUser>

export type CreateOrUpdateUserSaveServiceFN = (user: ArgsCreateUser) => ResponseSucessCreateUserService | ResponseFailCreateUserService

export type CreateOrUpdateUserControll = (user: ArgsCreateUser) => Promise<UserModel & Error>


// METHODS MEDIATOR >> SERVINDO PARA USO DOS METODOS REPOSITORY
export type ListUsersFN = () => Promise<UserModel[]>

export type AcessUserFN = () => Promise<UserModel>

export type UpdateUserFN = (id: string, newData: UserModel) => Promise<UserModel>

export type RemoveUserFN = (id: string) => Promise<boolean>

// PROTO
export interface PropsUserMethodsProto {
	primeiroNome?: string
	restanteNome?: string
	cpf?: string
	getNomeCompleto?(): Promise<string>
	getPropsUserDefault?(cpf: string): Promise<OptionsUserProps>
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

// import { test } from 'node:test'
import assert from 'assert'
import { vi, describe, test, beforeEach } from 'vitest'

import { createOrUpdateUserSaveService } from '@src/Modules/User/_Core/SaveServices/CreateOrUpdateUser/CreateOrUpdateUserSaveService'
import { fakeUserDefaultBaseInstanceOne, fakeUserDefaultBaseInstanceTwo } from '@src/Modules/User/_Core/Base/CreateUserBase.domain.spec'
import { createUserRepoMediator } from '@src/Modules/User/Mediators/RepoMediatorUser'
import { optionsFactoryUserRepositoryInUse } from '@src/Modules/User/_Core/Factorys/FactoryUserRepositoryInUse'
import { UserModel, ArgsCreateUser } from '@src/Modules/User/_Core/Contracts/UserContracts'

const makeFakeUserDefaultBaseInstanceOne = fakeUserDefaultBaseInstanceOne
// const makeFakeUserDefaultBaseInstanceTwo = fakeUserDefaultBaseInstanceTwo

const sut = createUserRepoMediator // <-- TEST O SERVICO 
const makeRepoMemory = optionsFactoryUserRepositoryInUse.memory

const clearItemsRepoMemoryUser = () => makeRepoMemory.items = []

const service = createOrUpdateUserSaveService

const makeSut = vi.fn(sut).mockReturnValueOnce(makeRepoMemory.create(service))
// const makeSut = vi.fn(sut).mockImplementationOnce(async (arg: ArgsCreateUser) => await makeRepoMemory.create(arg))

/* 
		Mockado o Mediator que recebe do Saveservice - entao é um SaveService 
		que mudei a implemetacao para salvar sempre na opcao RepositoryMemory
*/

beforeEach(() => {
	clearItemsRepoMemoryUser()
	vi.clearAllMocks()
})

describe('Create Or Update User by RepoMemory >> [Sucess]', async () => {
	const sut = await makeSut(makeFakeUserDefaultBaseInstanceOne)
	// console.log('MOCKEI 1 >>', await sut(makeFakeUserDefaultBaseInstanceOne))

	test(`deve ser [default] o campo typeUser da instancia UserDefault.`, async () => {
		const current = await sut(makeFakeUserDefaultBaseInstanceOne)
		const expected = current.typeUser === 'user_default'

		// console.log('current [instanciaCompletaUserDefault] Sempre pelo Service in REPOMEMORY>> ', current)
		// console.log('A RESPOSTA DA EXPECTATIVA SERÁ >> ', expected)

		assert(expected === true)
	})

	test(`deve conter o subObjeto propsContext com o campo cpf na instancia UserDefault.`, async () => {
		const current = await sut(makeFakeUserDefaultBaseInstanceOne)
		const expected = current.propsContext.cpf === 'cpfone'

		console.log('current [instanciaCompletaUserDefault] Sempre pelo Service in REPOMEMORY>> ', current)
		// console.log('A RESPOSTA DA EXPECTATIVA SERÁ >> ', expected)

		assert(expected === true)
	})


})


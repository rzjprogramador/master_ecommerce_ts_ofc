// import { test } from 'node:test'
import assert from 'assert'
import { vi, describe, test, beforeEach } from 'vitest'

import { createOrUpdateUserSaveService } from '@src/Modules/User/Core/SaveServices/CreateOrUpdateUser/CreateOrUpdateUserSaveService'
import { fakeUserDefaultBaseInstanceOne, fakeUserDefaultBaseInstanceTwo, fakeUserCliente_Pessoa_JuridicaBaseInstanceOne, fakeUserCliente_Pessoa_JuridicaBaseInstanceTwo } from '@src/Modules/User/Core/Base/CreateUserBase.domain.spec'
import { createUserRepoMediator } from '@src/Modules/User/Mediators/RepoMediatorUser'
import { optionsFactoryUserRepositoryInUse } from '@src/Modules/User/Core/Factorys/FactoryUserRepositoryInUse'
import { ArgsCreateUser } from '@src/Modules/User/Core/Contracts/UserContracts'

const makeSut = createOrUpdateUserSaveService

const makeFakeUserDefaultBaseInstanceOne = fakeUserDefaultBaseInstanceOne
const makeFakeUserDefaultBaseInstanceTwo = fakeUserDefaultBaseInstanceTwo

const makeFakeUserCliente_Pessoa_JuridicaBaseInstanceOne = fakeUserCliente_Pessoa_JuridicaBaseInstanceOne
const makeFakeUserCliente_Pessoa_JuridicaBaseInstanceTwo = fakeUserCliente_Pessoa_JuridicaBaseInstanceTwo

const sutUseMemory = createUserRepoMediator // <-- TEST O SERVICO 
const makeRepoMemory = optionsFactoryUserRepositoryInUse.memory

const clearItemsRepoMemoryUser = () => makeRepoMemory.items = []

describe('Create Or Update User by RepoMemory >> [Sucess]', () => {
	const sut = makeSut

	test(`deve ser [default] o campo typeUser da instancia UserDefault.`, async () => {
		const current = await sut(makeFakeUserDefaultBaseInstanceOne)
		const expected = current.typeUser === 'default'

		console.log('OBJ CRIADO [USER_DEFAULT ] BY CREATE_UPDATE SERVICE IN REPOMEMORY>> ', current)
		// console.log('A RESPOSTA DA EXPECTATIVA SERÁ >> ', expected)

		assert(expected === true)
	})

	test(`deve conter o campo propsContext/cpf da instancia UserDefault.`, async () => {
		const current = await sut(makeFakeUserDefaultBaseInstanceOne)
		const expected = current.propsContext.cpf === 'cpfone'

		console.log('current OBJ [USER_DEFAULT ] [] BY CREATE_UPDATE SERVICE IN REPOMEMORY>> ', current)
		// console.log('A RESPOSTA DA EXPECTATIVA SERÁ >> ', expected)

		assert(expected === true)
	})

	test(`deve criar instancia de User.`, async () => {
		const current = await sut(makeFakeUserDefaultBaseInstanceOne)
		const expected = current.primeiroNome === 'oneFake'
		// console.log('OBJ CRIADO USER DEFAULT BY CREATE_UPDATE SERVICE IN REPOMEMORY>> ', current)
		// console.log('A RESPOSTA DA EXPECTATIVA SERÁ >> ', expected)
		assert(expected === true)
	})

	test(`deve ter o subObjeto register apartir do SaveService e o campo register/createdAt ser instancia de Date.`, async () => {
		const current = await sut(makeFakeUserDefaultBaseInstanceOne)
		const expected = (current.registers?.createdAt instanceof Date)
		// console.log('OBJ CRIADO >> ', current)
		// console.log('createAt é instando type >> ', typeof current.registers?.createdAt)
		assert(expected === true)
	})

})

describe('Service Create User sempre salvando no [RepoMemory]>> [Sucess]', () => {
	const sut = makeSut

	beforeEach(() => {
		vi.fn(sutUseMemory).mockImplementation((user: ArgsCreateUser) => optionsFactoryUserRepositoryInUse.memory.create(user))
		/* 
				Mockado o Mediator que recebe do Saveservice - entao é um SaveService 
				que mudei a implemetacao para salvar sempre na opcao RepositoryMemory
		*/

		clearItemsRepoMemoryUser()
		vi.clearAllMocks()
	})

	test(`deve ter o id do tipo string apartir da criacao do SaveService.`, async () => {
		const current = await sut(makeFakeUserDefaultBaseInstanceOne)
		const expected = typeof current.id === 'string'

		// console.log('OBJ CRIADO Service in RepoMemory >> ', current)
		// console.log('RESPOSTA DA EXPECTATIVA >> ', expected)

		assert(expected === true)
	})

	test(`deve conter 2 instancias criadas no items do repoMemory.`, async () => {
		await sut(makeFakeUserDefaultBaseInstanceOne)
		await sut(makeFakeUserDefaultBaseInstanceTwo)

		const current = makeRepoMemory.items
		const expected = current.length === 2

		// console.log('VIEW RepoMemory >> ', current)
		// console.log('RESPOSTA DA EXPECTATIVA >> ', expected)

		assert(expected === true)
	})

})

describe('Cliente_Pessoa_Juridica >> [Sucess]', () => {
	const sut = makeSut

	test(`deve ser [Cliente_Pessoa_Juridica] o campo typeUser da instancia User PessoaJuridica.`, async () => {
		const current = await sut(makeFakeUserCliente_Pessoa_JuridicaBaseInstanceOne)
		const expected = current.typeUser === 'Cliente_Pessoa_Juridica'

		// console.log('OBJ CRIADO [Cliente_Pessoa_Juridica ] BY CREATE_UPDATE SERVICE IN REPOMEMORY>> ', current)
		// console.log('A RESPOSTA DA EXPECTATIVA SERÁ >> ', expected)

		assert(expected === true)
	})

	test(`deve criar instancia de UserPessoaJuridica.`, async () => {
		const current = await sut(makeFakeUserCliente_Pessoa_JuridicaBaseInstanceOne)
		const expected = current.propsContext.cnpj === 'cnpjone'

		console.log('current OBJ PessoaJuridica in Service by REPOMEMORY >> ', current)
		console.log('EXPECTATIVA SERÁ >> ', expected)

		assert(expected === true)
	})

})


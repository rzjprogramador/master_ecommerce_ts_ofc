// import { test } from 'node:test'
import assert from 'assert'
import { describe, test } from 'vitest'

import { createUserBase } from '@src/Modules/User/Core/Base/CreateUserBase'
import { FakeUserBaseInstance } from '@src/Modules/User/Core/Contracts/UserContracts'

// Fakers Root
export const fakeUserBaseInstanceOne: FakeUserBaseInstance = {
	primeiroNome: 'oneFake',
	complementoNome: 'restantenome oneFake',
	email: 'oneFakeBaseUser@gmail.com',
	typeUser: 'default'
}

export const fakeUserBaseInstanceTwo: FakeUserBaseInstance = {
	primeiroNome: 'twoFake',
	complementoNome: 'restante twoFake',
	email: 'twoFakeBaseUser@gmail.com',
	typeUser: 'default'
}

const makeSutCreateUserBase = createUserBase

describe('CreateUserBase >> Sucess', () => {
	const sut = makeSutCreateUserBase

	test(`deve criar um user Base.`, async () => {
		const current = await sut(fakeUserBaseInstanceOne)
		const expected = current.primeiroNome == fakeUserBaseInstanceOne.primeiroNome
		// console.log('expected PRIMEIRO NOME >> ', expected)
		// console.log('CREATE USER BASE >> ', current)
		assert(expected === true)
	})

	test(`[method Proto] deve retornar o nome completo com o metodoProto getNomeCompleto().`, async () => {
		const current = await sut(fakeUserBaseInstanceOne)
		const expected = await (current?.getNomeCompleto?.())
		// console.log('OBJ CRIADO >> ', current)
		// console.log('A RESPOSTA DA EXPECTATIVA SERÁ >> ', expected)
		const response = `${current.primeiroNome} ${current.restanteNome}`
		assert(expected === response)
	})

})

describe.todo('CreateUserBase >> Fail', () => {
	const sut = makeSutCreateUserBase

	test(`nao deve ter o campo id nos objetos user base.`, async () => {
		const current = await sut(fakeUserBaseInstanceOne)
		const expected = current.id === undefined
		// console.log('expected nao ter o id >> ', expected)
		assert(expected === true)
	})

})

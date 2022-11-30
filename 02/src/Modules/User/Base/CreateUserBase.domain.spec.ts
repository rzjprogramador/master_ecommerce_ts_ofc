// import { test } from 'node:test'
import assert from 'assert'

import { describe, it, test } from 'vitest'

import { createUserBase } from './CreateUserBase'
import { FakeBaseUser } from './UserContracts'

// Fakers Root
export const oneFakeBaseUser: FakeBaseUser = {
	primeiroNome: 'oneFake',
	restanteNome: 'restantenome oneFake',
	email: 'oneFakeBaseUser@gmail.com',
	typeUser: 'default'
}

export const twoFakeBaseUser: FakeBaseUser = {
	primeiroNome: 'twoFake',
	restanteNome: 'restante twoFake',
	email: 'twoFakeBaseUser@gmail.com',
	typeUser: 'default'
}

const makeSutCreateUserBase = createUserBase

describe('CreateUserBase >> Sucess', () => {
	const sut = makeSutCreateUserBase

	test(`deve criar um user Base.`, async () => {
		const current = await sut(oneFakeBaseUser)
		const expected = current.primeiroNome == oneFakeBaseUser.primeiroNome
		// console.log('expected PRIMEIRO NOME >> ', expected)
		// console.log('CREATE USER BASE >> ', current)
		assert(expected === true)
	})

	test(`[method Proto] deve retornar o nome completo com o metodoProto getNomeCompleto().`, async () => {
		const current = await sut(oneFakeBaseUser)
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
		const current = await sut(oneFakeBaseUser)
		const expected = current.id === undefined
		// console.log('expected nao ter o id >> ', expected)
		assert(expected === true)
	})

})

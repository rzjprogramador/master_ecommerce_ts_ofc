// import { test } from 'node:test'
import assert from 'assert'
import { describe, test } from 'vitest'

import { createUserBase } from '@src/Modules/User/_Core/Base/CreateUserBase'
import { FakeUserBaseInstance } from '@src/Modules/User/_Core/Contracts/UserContracts'

// Fakers Root
export const fakeUserDefaultBaseInstanceOne: FakeUserBaseInstance = {
	primeiroNome: 'oneFake',
	complementoNome: 'complementoNome fakeUserDefaultBaseInstanceOne',
	email: 'oneFakeBaseUser@gmail.com',
	cpf: 'cpfone',
	typeUser: 'user_default'
}

export const fakeUserDefaultBaseInstanceTwo: FakeUserBaseInstance = {
	primeiroNome: 'twoFake',
	complementoNome: 'restante fakeUserDefaultBaseInstanceTwo',
	email: 'twoFakeBaseUser@gmail.com',
	cpf: 'cpftwo',
	typeUser: 'user_default'
}

// export const fakeUserCliente_Pessoa_JuridicaBaseInstanceOne: FakeUserBaseInstance = {
// 	primeiroNome: 'oneFake',
// 	complementoNome: 'complementoNome oneFakeJuridico',
// 	email: 'oneFakeBaseUser@gmail.com',
// 	cnpj: 'cnpjone',
// 	razaoSocial: 'razaoSocial one',
// 	typeUser: 'Cliente_Pessoa_Juridica'
// }

// export const fakeUserCliente_Pessoa_JuridicaBaseInstanceTwo: FakeUserBaseInstance = {
// 	primeiroNome: 'twoFake',
// 	complementoNome: 'complementoNome twoFakeJuridico',
// 	email: 'twoFakeBaseUser@gmail.com',
// 	cnpj: 'cnpjtwo',
// 	razaoSocial: 'razaoSocial two',
// 	typeUser: 'Cliente_Pessoa_Juridica'
// }

const makeSutCreateUserBase = createUserBase

describe('CreateUserBase >> Sucess', () => {
	const sut = makeSutCreateUserBase

	test(`deve criar um user Base.`, async () => {
		const current = await sut(fakeUserDefaultBaseInstanceOne)
		const expected = current.primeiroNome == fakeUserDefaultBaseInstanceOne.primeiroNome
		// console.log('expected PRIMEIRO NOME >> ', expected)
		// console.log('CREATE USER BASE >> ', current)
		assert(expected === true)
	})

	test(`[method Proto] deve retornar o nome completo com o metodoProto getNomeCompleto().`, async () => {
		const current = await sut(fakeUserDefaultBaseInstanceOne)
		const expected = await (current?.getNomeCompleto?.())

		// console.log('current obj CreateUserBase >> ', current)
		// console.log('EXPECTATIVA getNomeCompleto() in CreateUserBase  >> ', expected)

		const response = `${current.primeiroNome} ${current.complementoNome}`
		assert(expected === response)
	})

})

describe.todo('CreateUserBase >> Fail', () => {
	const sut = makeSutCreateUserBase

	test(`nao deve ter o campo id nos objetos user base.`, async () => {
		const current = await sut(fakeUserDefaultBaseInstanceOne)
		const expected = current.id === undefined

		// console.log('expected nao ter o id in CreateUserBase >> ', expected)

		assert(expected === true)
	})

})

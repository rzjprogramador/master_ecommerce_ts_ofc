// import { test } from 'node:test'
import assert from 'assert'
import { vi, describe, it, test } from 'vitest'

import { createOrUpdateUserServiceSave } from '@src/Modules/User/ControllCases/CreateOrUpdate/ServiceSave/CreateOrUpdateUserServiceSave'
import { oneFakeBaseUser, twoFakeBaseUser } from '@src/Modules/User/Base/CreateUserBase.domain.spec'

const makeSut = createOrUpdateUserServiceSave
const fakeEntityOne = oneFakeBaseUser
const fakeEntityTwo = twoFakeBaseUser

describe('Create Or Update User by RepoMemory >> [Sucess]', () => {
    const sut = makeSut

    test(`deve criar instancia de User.`, async () => {
        const current = await sut(fakeEntityOne)
        const expected = current.primeiroNome === 'oneFake'
        // console.log('OBJ CRIADO >> ', current)
        // console.log('A RESPOSTA DA EXPECTATIVA SERÁ >> ', expected)
        assert(expected === true)
    })

    test(`deve ser instancia de Date o campo register/createdAt.`, async () => {
        const current = await sut(oneFakeBaseUser)
        const expected = (current.registers?.createdAt instanceof Date)
        console.log('Obj >> ', current)
        // console.log('createAt é instando type >> ', typeof current.registers?.createdAt)
        assert(expected === true)
    })

})

describe.todo('_ >> [Fail]', () => {
    const sut = makeSut

    test(`nao deve _.`, async () => {
        const current = null
        const expected = null
        // console.log('expected _ >> ', expected)
        // console.log('current _ >> ', current)
        assert(expected === true)
    })

})

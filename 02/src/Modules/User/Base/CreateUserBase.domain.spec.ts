import { vi, describe, it, expect } from 'vitest'

import { createUserBase } from './CreateUserBase'
import { FakeBaseUser } from './UserContracts'

const oneFakeBaseUser: FakeBaseUser = {
    primeiroNome: 'nomeoneFakeBaseUser',
    restanteNome: 'restantenome oneFakeBaseUser',
    email: 'oneFakeBaseUser@gmail.com',
    typeUser: 'default'
}

describe('CreateUserBase >> Sucess', () => {
    const sut = createUserBase

    it(`deve criar um user Base.`, async () => {
        const current = await sut(oneFakeBaseUser)
        const expected = current.primeiroNome == 'nomeoneFakeBaseUser'
        // console.log('CREATE USER BASE >> ', current)
        expect(expected).toEqual(true)
    })

    it(`deve nao ter o campo id nos objetos user base.`, async () => {
        const current = await sut(oneFakeBaseUser)
        const expected = current.id === undefined
        // console.log('CREATE USER BASE >> ', current)
        expect(expected).toEqual(true)
    })

})

describe.todo('CreateUserBase >> Fail', () => {
    it(`deve  `, async () => {

        expect(true)
    })

})

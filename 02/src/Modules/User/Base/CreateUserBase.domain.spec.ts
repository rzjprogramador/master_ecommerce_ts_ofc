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
        // console.log('expected CREATE USER BASE >> ', expected)
        expect(expected).toEqual(true)
    })

    it(`deve nao ter o campo id nos objetos user base.`, async () => {
        const current = await sut(oneFakeBaseUser)
        const expected = current.id === undefined
        // console.log('expected nao ter o id >> ', expected)
        expect(expected).toEqual(true)
    })

    it(`deve ter os campos registers de registros nos  subOobjeto user base.`, async () => {
        const current = await sut(oneFakeBaseUser)
        const expected = (current.registers !== undefined)
        // console.log('Obj >> ', current)
        // console.log('expected existir o subObj register>> ', expected)
        expect(expected).toEqual(true)
    })

    it(`deve ser instancia de Date o campo register/createdAt.`, async () => {
        const current = await sut(oneFakeBaseUser)
        const expected = (current.registers?.createdAt instanceof Date)
        // console.log('Obj >> ', current)
        // console.log('createAt é instando type >> ', typeof current.registers?.createdAt)
        expect(expected).toEqual(true)
    })

})

describe.todo('CreateUserBase >> Fail', () => {
    it(`deve  `, async () => {

        expect(true)
    })

})

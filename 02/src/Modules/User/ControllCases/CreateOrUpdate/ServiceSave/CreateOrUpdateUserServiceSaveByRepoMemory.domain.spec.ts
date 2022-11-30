// import { test } from 'node:test'
import assert from 'assert'
import { vi, describe, it, test, beforeEach } from 'vitest'

import { createOrUpdateUserServiceSave } from '@src/Modules/User/ControllCases/CreateOrUpdate/ServiceSave/CreateOrUpdateUserServiceSave'
import { oneFakeBaseUser, twoFakeBaseUser } from '@src/Modules/User/Base/CreateUserBase.domain.spec'
import { userCreateMediatorRepository } from '@src/Modules/User/Mediators/UserMediatorRepository'
import { optionsUserFactoryInUseRepository } from '@src/Modules/User/Factorys/UserFactoryInUseRepository'
import { ArgsCreateUser } from '@src/Modules/User/Base/UserContracts'

const makeSut = createOrUpdateUserServiceSave
const makeFakeInstanceOne = oneFakeBaseUser
const makeFakeInstanceTwo = twoFakeBaseUser
const sutUseMemory = userCreateMediatorRepository // <-- TEST O SERVICO 
const makeRepoMemory = optionsUserFactoryInUseRepository.memory

const clearItemsRepoMemoryUser = () => makeRepoMemory.items = []

describe('Create Or Update User by RepoMemory >> [Sucess]', () => {
  const sut = makeSut

  test(`deve criar instancia de User.`, async () => {
    const current = await sut(makeFakeInstanceOne)
    const expected = current.primeiroNome === 'oneFake'
    // console.log('OBJ CRIADO >> ', current)
    // console.log('A RESPOSTA DA EXPECTATIVA SERÁ >> ', expected)
    assert(expected === true)
  })

  test(`deve ter o subObjeto register apartir do SaveService e o campo register/createdAt ser instancia de Date.`, async () => {
    const current = await sut(makeFakeInstanceOne)
    const expected = (current.registers?.createdAt instanceof Date)
    // console.log('OBJ CRIADO >> ', current)
    // console.log('createAt é instando type >> ', typeof current.registers?.createdAt)
    assert(expected === true)
  })

})

describe('Service Create User sempre salvando no [RepoMemory]>> [Sucess]', () => {
  const sut = makeSut

  beforeEach(() => {
    vi.fn(sutUseMemory).mockImplementation((user: ArgsCreateUser) => optionsUserFactoryInUseRepository.memory.create(user))
    /* 
        Mockado o Mediator que recebe do Saveservice - entao é um SaveService 
        que mudei a implemetacao para salvar sempre na opcao RepositoryMemory
    */

    clearItemsRepoMemoryUser()
    vi.clearAllMocks()
  })

  test(`deve ter o id do tipo string apartir da criacao do SaveService.`, async () => {
    const current = await sut(makeFakeInstanceOne)
    const expected = typeof current.id === 'string'

    console.log('OBJ CRIADO Service in RepoMemory >> ', current)
    console.log('RESPOSTA DA EXPECTATIVA >> ', expected)

    assert(expected === true)
  })

  test(`deve conter 2 instancias criadas no items do repoMemory.`, async () => {
    await sut(makeFakeInstanceOne)
    await sut(makeFakeInstanceTwo)

    const current = makeRepoMemory.items
    const expected = current.length === 2

    // console.log('VIEW RepoMemory >> ', current)
    // console.log('RESPOSTA DA EXPECTATIVA >> ', expected)

    assert(expected === true)
  })

})


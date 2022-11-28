import { vi, describe, it, expect, beforeEach } from 'vitest'

import { createClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Mediators/CreateClientepfByMediatorRepository'
import { optionsClientepfRepositories } from '@src/Modules/Clientes/Clientepf/Factorys/FactoryClientepfInUseRepository'
import { clientepfSeedOne } from '@src/Modules/Clientes/Clientepf/Fallbacks/Seeds/ClientepfSeeds'
import { ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { clientepfFakeNoIdOne, clientepfFakeUpdateSeedOne } from '@src/Modules/Clientes/Clientepf/Fallbacks/Fakes/ClientepfFakes'

// TODO: CONFERIR SE ESTOU SEMPRE USANDO O REPO INMEMORY NESTE TEST

describe('[Create Or Update] na Funcao CreateSave SaveService CreateClientepf By [RepoMemory] >> Sucess', () => {
    const sutRepoMediatorMemory = createClientepfByMediatorRepository
    const repoMemory = optionsClientepfRepositories.memory
    const clientepfSeedOneCompleted = clientepfSeedOne
    const inputclientepfFakeUpdateSeedOne = clientepfFakeUpdateSeedOne

    const clearListClientepfMemory = () => repoMemory.items = []

    vi.clearAllMocks()
    vi.fn(sutRepoMediatorMemory).mockImplementation(async (cliente: ClientepfModel) => await repoMemory.create(cliente))

    beforeEach(() => {
        clearListClientepfMemory()
    })

    it(`deve criar ou editar ao receber o objeto com campo id pelo repository memory `, async () => {
        const created = await sutRepoMediatorMemory(clientepfSeedOneCompleted)
        const updated = await sutRepoMediatorMemory(inputclientepfFakeUpdateSeedOne)
        const immutability = (created !== updated)

        // console.log('CREATE  >> ', created)
        // console.log('UPDATE  >> ', updated)
        // console.log('IMUTABILIDADE SAO DIFERENTES OS OBJETOS CRIADOS  >> ', immutability)



        expect(created).toHaveProperty('nome', 'fakenomeone')
        expect(created).toHaveProperty('sobrenome', 'fake sobrenome one')

        expect(updated).toHaveProperty('nome', 'updatedNome')
        expect(updated).toHaveProperty('sobrenome', 'udpdatedSobrenome')

        expect(immutability).toEqual(true)
    })


})

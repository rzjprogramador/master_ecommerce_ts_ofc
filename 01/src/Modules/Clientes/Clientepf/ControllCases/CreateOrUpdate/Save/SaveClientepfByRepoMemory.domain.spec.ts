import { vi, describe, it, expect, beforeEach } from 'vitest'

import { createClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Mediators/CreateClientepfByMediatorRepository'
import { optionsClientepfRepositories } from '@src/Modules/Clientes/Clientepf/Factorys/FactoryClientepfInUseRepository'
import { clientepfSeedOne } from '@src/Modules/Clientes/Clientepf/Fallbacks/Seeds/ClientepfSeeds'
import { ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { clientepfFakeNoIdOne } from '@src/Modules/Clientes/Clientepf/Fallbacks/Fakes/ClientepfFakes'

describe('Service CreateClientepf Tester By RepoMemory >> Sucess', () => {
    const sutRepoMediatorMemory = createClientepfByMediatorRepository
    const repoMemory = optionsClientepfRepositories.memory
    const inputFakeNoIdOne = clientepfFakeNoIdOne
    const inputClientepfSeedOneCompleted = clientepfSeedOne

    const clearListClientepfMemory = () => repoMemory.items = []

    vi.clearAllMocks()
    vi.fn(sutRepoMediatorMemory).mockImplementation(async (cliente: ClientepfModel) => await repoMemory.create(cliente))
    beforeEach(() => {
        clearListClientepfMemory()
    })

    it(`deve criar um objeto sempre pelo repository memory `, async () => {
        const createByRepoMemory = await sutRepoMediatorMemory(inputClientepfSeedOneCompleted)
        // console.log('CRIANDO OBJ PELO REPO MEMORY NO MEDIATOR >> ', createByRepoMemory)
        expect(createByRepoMemory).toHaveProperty('nome')
    })

    it(`deve mostrar após a criacao do obj o repository memory com o item criado `, async () => {
        await sutRepoMediatorMemory(inputFakeNoIdOne)
        const response = repoMemory.items

        // console.log('VIA MEDIATOR -> REPO_MEMORY APOS CRIACAO DO ITEM  >> ', response)

        expect(response.length).toBe(1)
    })

})

import { vi, describe, it, expect, beforeEach } from 'vitest'

import { createClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Mediators/CreateClientepfByMediatorRepository'
import { optionsClientepfRepositories } from '@src/Modules/Clientes/Clientepf/Factorys/FactoryClientepfInUseRepository'
import { clientepfSeedOne } from '@src/Modules/Clientes/Clientepf/Fallbacks/Seeds/ClientepfSeeds'
import { ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { clientepfFakeNoIdOne, clientepfFakeUpdateSeedOne } from '@src/Modules/Clientes/Clientepf/Fallbacks/Fakes/ClientepfFakes'

// TODO: CONFERIR SE ESTOU SEMPRE USANDO O REPO INMEMORY NESTE TEST

describe('[Update] Service CreateClientepf Tester By RepoMemory >> Sucess', () => {
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

    it(`deve editar ao receber o objeto com campo id pelo repository memory `, async () => {
        await sutRepoMediatorMemory(clientepfSeedOneCompleted)
        const updated = await sutRepoMediatorMemory(inputclientepfFakeUpdateSeedOne)

        // console.log('UPDATE NA FUNCAO CREATE :: VIA REPO MEMORY NO MEDIATOR >> ', updated)

        expect(updated).toHaveProperty('nome', 'updatedNome')
        expect(updated).toHaveProperty('sobrenome', 'udpdatedSobrenome')
    })


})

import { vi, describe, it, expect, beforeEach } from 'vitest'

import { createClientepfByMediatorRepository } from '@src/Modules/Clientes/Clientepf/Mediators/ClientepfByMediatorRepository'
import { optionsMakerRepositoryClientepf } from '@src/Modules/Clientes/Clientepf/Makers/MakerRepositoryClientepf.makers'
import { clientepfSeedOne } from '@src/Modules/Clientes/Clientepf/Fallbacks/Seeds/ClientepfSeeds'
import { ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'

describe('Service CreateClientepf Tester By RepoMemory >> Sucess', () => {
    const sutRepoMediatorMemory = createClientepfByMediatorRepository
    const repoMemory = optionsMakerRepositoryClientepf.memory
    const inputClientepfSeedOneCompleted = clientepfSeedOne

    const auxZerarListClientepfMemory = () => repoMemory.items = []

    vi.clearAllMocks()
    vi.fn(sutRepoMediatorMemory).mockImplementation(async (cliente: ClientepfModel) => await repoMemory.create(cliente))
    beforeEach(() => {
        auxZerarListClientepfMemory()
    })

    it(`deve criar um objeto sempre pelo repository memory `, async () => {
        const createByRepoMemory = await sutRepoMediatorMemory(inputClientepfSeedOneCompleted)
        // console.log('CRIANDO OBJ PELO REPO MEMORY NO MEDIATOR >> ', createByRepoMemory)
        expect(createByRepoMemory).toHaveProperty('nome')
    })

    it(`deve mostrar após a criacao do obj o repository memory com o item criado `, async () => {
        await sutRepoMediatorMemory(inputClientepfSeedOneCompleted)
        const response = repoMemory.items

        // console.log('VIA MEDIATOR -> REPO_MEMORY APOS CRIACAO DO ITEM  >> ', response)

        expect(response.length).toBe(1)
    })

})

import { optionsClientepfRepositories } from '../../../src/Modules/Clientes/Clientepf/Factorys/FactoryClientepfInUseRepository'
import { clientepfSeedOne, clientepfSeedTwo } from '../../../src/Modules/Clientes/Clientepf/Fallbacks/Seeds/ClientepfSeeds'
import { clientepfFakeUpdateSeedOne } from '../../../src/Modules/Clientes/Clientepf/Fallbacks/Fakes/ClientepfFakes'

import { describe, it, expect } from 'vitest'

describe('ClientepfRepositoryMemory || Usando Seeds como Objetos >> Sucess', () => {
    const sut = optionsClientepfRepositories.memory
    const inputSeedOne = clientepfSeedOne
    const inputSeedTwo = clientepfSeedTwo
    const inputUpdateOne = clientepfFakeUpdateSeedOne

    const clearItemsClientepfRepositoryMemory = () => {
        sut.items = []
    }

    it(`[list] deve listar todos objetos clientepf  criados.`, async () => {
        await sut.create(inputSeedOne)
        await sut.create(inputSeedTwo)
        const response = await sut.list()
        // console.log('LIST CLIENTES PF VIA REPO_MEMORY >> ', response)

        expect(response.length).toEqual(2)
        clearItemsClientepfRepositoryMemory()
    })

    it(`[create] deve criar um objeto clientepf.`, async () => {
        const response = await sut.create(inputSeedOne)
        // console.log('CREATE VIA REPO_MEMORY >> ', response)

        expect(response).toHaveProperty('nome', 'fakenomeone')
        expect(response).toHaveProperty('sobrenome', 'fake sobrenome one')
        clearItemsClientepfRepositoryMemory()
    })

    it(`[update] deve atualizar o objeto clientepf.`, async () => {
        const response = await sut.update(inputUpdateOne)
        // console.log('ATUALIZADO VIA REPO_MEMORY >> ', response)

        expect(response).toHaveProperty('nome', 'updatedNome')
        expect(response).toHaveProperty('sobrenome', 'udpdatedSobrenome')
        clearItemsClientepfRepositoryMemory()
    })

    it(`[remove] deve remover da lista de clientepf criados.`, async () => {
        await sut.create(inputSeedOne)
        await sut.create(inputSeedTwo)
        const responseList = await sut.list()

        // console.log('ANTES :: LIST :: COM 2 ITEMS >> ', responseList)

        const action = await sut.remove('seedIdOne')
        // obs: SE O ID FOR PASSADO COMO UM OBJETO MUDA AQUI PASSANDO UM { id: 'seedIdOne' } E NO TYPE DO REPO EM REMOVE() PARA RECEBER UM ID OBJETO.

        // console.log('DEPOIS :: LIST :: COM 1 ITEM >> ', responseList)

        expect(action).toEqual(true)
        expect(responseList.length).toEqual(1)
        clearItemsClientepfRepositoryMemory()
    })


})

import { clientepfSeedOne, clientepfSeedTwo } from '../../../src/Modules/Clientes/Clientepf/Fallbacks/Seeds/ClientepfSeeds'
import { clientepfFakeUpdateOne } from '../../../src/Modules/Clientes/Clientepf/Fallbacks/Fakes/ClientepfFakes'
import { ClientepfRepositoryMemory } from './ClientepfRepositoryMemory'

import { describe, it, expect } from 'vitest'

describe('ClientepfRepositoryMemory || Usando Seeds como Objetos >> Sucess', () => {
    const sut = new ClientepfRepositoryMemory
    const inputSeedOne = clientepfSeedOne
    const inputSeedTwo = clientepfSeedTwo
    const inputUpdateOne = clientepfFakeUpdateOne

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
        const input1 = await sut.create(inputUpdateOne)
        const response = await sut.update(inputUpdateOne)
        console.log('ATUALIZADO VIA REPO_MEMORY >> ', response)

        expect(response).toHaveProperty('nome', 'updatedNome')
        expect(response).toHaveProperty('sobrenome', 'udpdatedSobrenome')
        clearItemsClientepfRepositoryMemory()
    })

    it(`[remove] deve remover da lista de clientepf criados.`, async () => {
        await sut.create(inputSeedOne)
        await sut.create(inputSeedTwo)
        const responseList = await sut.list()

        // console.log('ANTES :: LIST :: COM 2 ITEMS >> ', responseList)

        const action = await sut.remove({ id: 'seedIdOne' })

        // console.log('DEPOIS :: LIST :: COM 1 ITEM >> ', responseList)

        expect(action).toEqual(true)
        expect(responseList.length).toEqual(1)
        clearItemsClientepfRepositoryMemory()
    })


})

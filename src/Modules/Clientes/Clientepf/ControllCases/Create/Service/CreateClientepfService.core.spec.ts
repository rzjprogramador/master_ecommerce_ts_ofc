import { vi, describe, it, expect } from 'vitest'

import { createClientepfService } from '@src/Modules/Clientes/Clientepf/ControllCases/Create/Service/CreateClientepfService'
import { CreateClientepfService } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { optionsClientepfRepositories } from '@src/Modules/Clientes/Clientepf/Makers/MakersClientepf.makers'


// TODO

describe.todo('Create Cliente Fisico Service >> Sucess', () => {
    const sut = createClientepfService
    // const sutRepositoryClienteInMemory = optionsClientepfRepositories.memory
    // const sutFieldPrimeiroNome = varsTestersClientepf.fieldPrimeiroNome

    // const sutStub: CreateClientepfService = async (cliente) => {
    //     const modelEntity = await makerEntityClientepf.on.create(cliente)
    //     return await sutRepositoryClienteInMemory.create(modelEntity)
    // }

    // it(`deve criar cliente sempre pelo repo in memory para test.`, async () => {
    //     const input = fakeClientePfArgs1
    //     const action = await sutStub(input)
    //     // console.log('CREATE CLIENTE_FISICO BY REPO INMEMORY NO SERVICE >> ', action)

    //     expect(action).toHaveProperty(sutFieldPrimeiroNome)
    // })

})

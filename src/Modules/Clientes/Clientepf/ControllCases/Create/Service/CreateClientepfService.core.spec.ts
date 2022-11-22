import { vi, describe, it, expect } from 'vitest'

import { createClientepfService } from '@src/Modules/Clientes/Clientepf/ControllCases/Create/Service/CreateClientepfService'
import { makerCreateClientepf } from '@src/Modules/Clientes/Clientepf/Makers/MakersClientepf'
import { CreateClientepfService } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { optionsClientepfRepositories } from '@src/Modules/Clientes/Clientepf/RepositoryInUse/Clientepf_InUse.repository'
import { fakeClientePfArgsOne } from '@src/Modules/Clientes/Clientepf/Data/Fakes/fakeClientePfArgs'
import { varsTestersClientepf } from '@src/Modules/Clientes/_Variantes/Clientepf.variantes'


describe('Create Cliente Fisico Service >> Sucess', () => {
    const sut = createClientepfService
    const sutRepositoryClienteInMemory = optionsClientepfRepositories.memory
    const sutFieldPrimeiroNome = varsTestersClientepf.fieldPrimeiroNome

    const sutStub: CreateClientepfService = async (cliente) => {
        const modelEntity = await makerCreateClientepf.on.create(cliente)
        return await sutRepositoryClienteInMemory.create(modelEntity)
    }

    it(`deve criar cliente sempre pelo repo in memory para test.`, async () => {
        const input = fakeClientePfArgsOne
        const action = await sutStub(input)
        // console.log('CREATE CLIENTE_FISICO BY REPO INMEMORY NO SERVICE >> ', action)

        expect(action).toHaveProperty(sutFieldPrimeiroNome)
    })

})

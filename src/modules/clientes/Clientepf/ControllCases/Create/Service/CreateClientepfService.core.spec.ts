import { vi, describe, it, expect } from 'vitest'

import { createClientepfService } from '@src/modules/clientes/Clientepf/ControllCases/Create/Service/CreateClientepfService'
import { makerCreateClientepf } from '@src/modules/clientes/Clientepf/Makers/MakersClientepf'
import { CreateClientepfService } from '@src/modules/clientes/Contracts/Clientepf.contract'
import { optionsClientepfRepositories } from '@src/modules/clientes/Clientepf/RepositoryInUse/Clientepf_InUse.repository'
import { fakeClientePfArgsOne } from '@src/modules/clientes/Clientepf/Data/Fakes/fakeClientePfArgs'
import { varsTestersClientepf } from '@src/modules/clientes/_Variantes/Clientepf.variantes'


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

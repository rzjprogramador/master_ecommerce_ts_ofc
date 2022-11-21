import { vi, describe, it, expect } from 'vitest'

import { createClienteService } from '@src/modules/participant/clientes/cases_controll_api/create/service/create_cliente_service'
import { makerCliente } from '@src/modules/participant/clientes/makers/makers_cliente'
import { CreateClienteService } from '@src/modules/participant/clientes/cases_entity/create/cliente.contracts'
import { optionsClienteRepositories } from '@src/modules/participant/clientes/repository_in_use/cliente_repository_in_use'
import { clienteFakeArgsRequestUnitysOne } from '@src/modules/participant/clientes/data/fakes/clienteFakeArgsRequestUnitys'


describe('Create Cliente Service >> Sucess', () => {
    const sut = createClienteService
    const sutRepositoryClienteInMemory = optionsClienteRepositories.memory

    const sutStub: CreateClienteService = async (cliente) => {
        const modelEntity = await makerCliente.newEntity.execute(cliente)
        return await sutRepositoryClienteInMemory.create(modelEntity)
    }

    it(`deve criar cliente sempre pelo repo in memory para test.`, async () => {
        const input = clienteFakeArgsRequestUnitysOne
        const action = await sutStub(input)
        // console.log('CREATE CLIENTE BY REPO INMEMORY NO SERVICE >> ', action)

        expect(action).toHaveProperty('nomeCliente')
    })

})

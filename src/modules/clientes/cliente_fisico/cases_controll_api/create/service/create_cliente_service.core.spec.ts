import { vi, describe, it, expect } from 'vitest'

import { createClienteFisicoService } from '@src/modules/clientes/cliente_fisico/cases_controll_api/create/service/create_cliente_service'
import { makerCliente } from '@src/modules/clientes/cliente_fisico/makers/makers_cliente'
import { CreateClienteFisicoService } from '@src/modules/clientes/cliente_fisico/cases_entity/_props/cliente_fisico.contracts'
import { optionsClienteRepositories } from '@src/modules/clientes/cliente_fisico/repository_in_use/cliente_repository_in_use'
import { clienteFakeArgsRequestUnitysOne } from '@src/modules/clientes/cliente_fisico/data/fakes/clienteFakeArgsRequestUnitys'


describe('Create Cliente Service >> Sucess', () => {
    const sut = createClienteFisicoService
    const sutRepositoryClienteInMemory = optionsClienteRepositories.memory

    const sutStub: CreateClienteFisicoService = async (cliente) => {
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

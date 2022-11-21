import { vi, describe, it, expect } from 'vitest'

import { createClienteFisicoService } from '@src/modules/clientes/cliente_fisico/cases_controll_api/create/service/create_cliente_fisico_service'
import { makerClienteFisico } from '@src/modules/clientes/cliente_fisico/makers/makers_cliente_fisico'
import { CreateClienteFisicoService } from '@src/modules/clientes/_data/contracts_clientes/cliente_fisico.contracts'
import { optionsClienteFisicoRepositories } from '@src/modules/clientes/cliente_fisico/repository_in_use/cliente_fisico_repository_in_use'
import { fakeClienteFisicoArgsOne } from '@src/modules/clientes/cliente_fisico/_data/fakes/fakeClienteFisicoArgsUnitys'
import { byTestersClienteFisico } from '@src/modules/clientes/_data/data_edit_cliente_fisico'


describe('Create Cliente Fisico Service >> Sucess', () => {
    const sut = createClienteFisicoService
    const sutRepositoryClienteInMemory = optionsClienteFisicoRepositories.memory
    const sutFieldPrimeiroNome = byTestersClienteFisico.fieldPrimeiroNome

    const sutStub: CreateClienteFisicoService = async (cliente) => {
        const modelEntity = await makerClienteFisico.newEntity.execute(cliente)
        return await sutRepositoryClienteInMemory.create(modelEntity)
    }

    it(`deve criar cliente sempre pelo repo in memory para test.`, async () => {
        const input = fakeClienteFisicoArgsOne
        const action = await sutStub(input)
        // console.log('CREATE CLIENTE_FISICO BY REPO INMEMORY NO SERVICE >> ', action)

        expect(action).toHaveProperty(sutFieldPrimeiroNome)
    })

})

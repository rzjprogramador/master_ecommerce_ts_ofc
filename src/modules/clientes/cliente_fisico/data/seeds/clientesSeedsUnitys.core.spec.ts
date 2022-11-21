import { ModelClienteFisico } from '@src/modules/clientes/cliente_fisico/cases_entity/_props/cliente_fisico.contracts'
import { clienteSeedOne } from '@src/modules/clientes/cliente_fisico/data/seeds/clientesSeedsUnitys'

import { describe, it, expect } from 'vitest'


describe('Seed Cliente >> Sucess', () => {
    const sutOne: ModelClienteFisico = clienteSeedOne

    it(`deve criar um cliente seed one`, async () => {
        const action = sutOne
        // console.log('by SEED ONE >> ', action)

        expect(action).toHaveProperty('nomeCliente', 'clienteFakeArgsRequestUnitysOne')
    })

})


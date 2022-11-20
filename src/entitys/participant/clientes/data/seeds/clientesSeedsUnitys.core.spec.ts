import { ModelCliente } from '@src/entitys/participant/clientes/entity/cliente.contracts'
import { clienteSeedOne } from '@src/entitys/participant/clientes/data/seeds/clientesSeedsUnitys'

import { describe, it, expect } from 'vitest'


describe('Seed Cliente >> Sucess', () => {
    const sutOne: ModelCliente = clienteSeedOne

    it(`deve criar um cliente seed one`, async () => {
        const action = sutOne
        console.log('by SEED ONE >> ', action)

        expect(action).toHaveProperty('nomeCliente', 'clienteFakeArgsRequestUnitysOne')
    })

})


import { ModelClienteFisico } from '@src/modules/clientes/_data_edit/contracts_clientes/cliente_fisico.contracts'
import { clienteSeedOne } from '@src/modules/clientes/cliente_fisico/data/seeds/clientesSeedsUnitys'
import { dataEditClienteFisico } from '@src/modules/clientes/_data_edit/data_edit_cliente_fisico'

import { describe, it, expect } from 'vitest'


describe('Seed Cliente >> Sucess', () => {
    const sutOne: ModelClienteFisico = clienteSeedOne
    const sutNomeCliente = dataEditClienteFisico.fake.nomeClienteFisico

    it(`deve criar um cliente seed one`, async () => {
        const action = sutOne
        // console.log('by SEED ONE >> ', action)

        expect(action).toHaveProperty('primeiroNome', sutNomeCliente)
    })

})


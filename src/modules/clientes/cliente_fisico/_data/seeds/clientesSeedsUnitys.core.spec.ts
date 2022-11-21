import { ModelClienteFisico } from '@src/modules/clientes/_data/contracts_clientes/cliente_fisico.contracts'
import { clienteSeedOne } from '@src/modules/clientes/cliente_fisico/_data/seeds/clientesSeedsUnitys'
import { byTestersClienteFisico, dataEditClienteFisico } from '@src/modules/clientes/_data/data_edit_cliente_fisico'

import { describe, it, expect } from 'vitest'


describe('Seed Cliente >> Sucess', () => {
    const sutOne: ModelClienteFisico = clienteSeedOne
    const sutNomeCliente = dataEditClienteFisico.fake.nomeClienteFisico
    const sutFieldPrimeiroNome = byTestersClienteFisico.fieldPrimeiroNome

    it(`deve criar um cliente seed one`, async () => {
        const action = sutOne
        // console.log('by SEED ONE >> ', action)

        expect(action).toHaveProperty(sutFieldPrimeiroNome, sutNomeCliente)
    })

})


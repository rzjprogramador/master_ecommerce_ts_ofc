import { ClientepfModel } from '@src/modules/clientes/Contracts/Clientepf.contract'
import { clienteSeedOne } from '@src/modules/clientes/Clientepf/Data/Seeds/clientesSeedsUnitys'
import { varsTestersClientepf, varsClientepf } from '@src/modules/clientes/_Variantes/Clientepf.variantes'

import { describe, it, expect } from 'vitest'


describe('Seed Cliente >> Sucess', () => {
    const sutOne: ClientepfModel = clienteSeedOne
    const sutNomeCliente = varsClientepf.fake.nomeClienteFisico
    const sutFieldPrimeiroNome = varsTestersClientepf.fieldPrimeiroNome

    it(`deve criar um cliente seed one`, async () => {
        const action = sutOne
        // console.log('by SEED ONE >> ', action)

        expect(action).toHaveProperty(sutFieldPrimeiroNome, sutNomeCliente)
    })

})


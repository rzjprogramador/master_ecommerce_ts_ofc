import { vi, describe, it, expect } from 'vitest'

import { makerCliente } from '@src/modules/participant/clientes/makers/makers_cliente'
import { recordsDNAParticipant } from '@src/app/use_objects_global/records_dna_participant'
import { clienteFakeArgsRequestUnitysOne } from '@src/modules/participant/clientes/data/fakes/clienteFakeArgsRequestUnitys'


describe('Create Cliente Entity >> Sucess', () => {
  const sut = makerCliente.newEntity

  it(`deve criar um objeto da entidade domain Cliente com campos do sistema e request.`, async () => {
    const argsRequest = clienteFakeArgsRequestUnitysOne
    const records = recordsDNAParticipant
    const input = { ...argsRequest, records }

    const action = await sut.create(input)
    // console.log('BY CLIENTE ENTITY >> ', action)

    expect(action).toHaveProperty('id')
    expect(action).toHaveProperty('token', 'one')
    expect(action).toHaveProperty('nomeCliente', 'clienteFakeArgsRequestUnitysOne')
  })

})



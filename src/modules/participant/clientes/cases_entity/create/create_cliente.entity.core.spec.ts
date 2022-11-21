import { vi, describe, it, expect } from 'vitest'

import { makerCliente } from '@src/modules/participant/clientes/makers/makers_cliente'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { clienteFakeArgsRequestUnitysOne } from '@src/modules/participant/clientes/data/fakes/clienteFakeArgsRequestUnitys'
import { STATUS_ACTIVE } from '@src/app/_data_edit/global_data_standard'

describe('Create Cliente Entity >> Sucess', () => {
  const sut = makerCliente.newEntity

  const argsRequest = clienteFakeArgsRequestUnitysOne
  const records = recordsDNAParticipant
  const input = { ...argsRequest, records }

  it(`deve criar um objeto da entidade domain Cliente com campos do sistema e request.`, async () => {
    const action = await sut.create(input)
    // console.log('BY CLIENTE ENTITY >> ', action)

    expect(action).toHaveProperty('id')
    expect(action).toHaveProperty('token', 'one')
    expect(action).toHaveProperty('nomeCliente', 'clienteFakeArgsRequestUnitysOne')
  })

  it(`deve iniciar como "Desativado" os objetos da entidade.`, async () => {
    const action = await sut.create(input)
    // console.log('BY CLIENTE ENTITY >> ', action)

    const response = action.records.statusActive
    const sutStatusActive = STATUS_ACTIVE.DESABLED

    expect(response).toEqual(sutStatusActive)
  })

})



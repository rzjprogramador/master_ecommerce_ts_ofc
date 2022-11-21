import { vi, describe, it, expect } from 'vitest'

import { makerClienteFisico } from '@src/modules/clientes/cliente_fisico/makers/makers_cliente_fisico'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { fakeClienteFisicoArgsOne } from '@src/modules/clientes/cliente_fisico/data/fakes/fakeClienteFisicoArgsUnitys'
import { dataEditClienteFisico } from '@src/modules/clientes/_data_edit/data_edit_cliente_fisico'
import { STATUS_ACTIVE } from '@src/app/_data_edit/global_data_standard'

describe('Create Cliente Fisico Entity >> Sucess', () => {
  const sut = makerClienteFisico.newEntity
  const sutNomeCliente = dataEditClienteFisico.fake.nomeClienteFisico

  const argsRequest = fakeClienteFisicoArgsOne
  const records = recordsDNAParticipant
  const input = { ...argsRequest, records }

  it(`deve criar um objeto da entidade domain Cliente Fisico com campos do sistema e request.`, async () => {
    const action = await sut.execute(input)
    // console.log('BY CLIENTE ENTITY >> ', action)

    expect(action).toHaveProperty('id')
    expect(action).toHaveProperty('token', 'one')
    expect(action).toHaveProperty('nomeCliente', sutNomeCliente)
  })

  it(`deve iniciar como "Desativado" os objetos da entidade.`, async () => {
    const action = await sut.execute(input)
    // console.log('BY CLIENTE_FISICO ENTITY >> ', action)

    const response = action.records.statusActive
    const sutStatusActive = STATUS_ACTIVE.DESABLED

    expect(response).toEqual(sutStatusActive)
  })

})



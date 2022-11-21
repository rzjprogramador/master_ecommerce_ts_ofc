import { vi, describe, it, expect } from 'vitest'

import { makerClienteFisico } from '@src/modules/clientes/cliente_fisico/makers/makers_cliente_fisico'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { fakeClienteFisicoArgsOne } from '@src/modules/clientes/cliente_fisico/_data/fakes/fakeClienteFisicoArgsUnitys'
import { byTestersClienteFisico, dataEditClienteFisico, msgsCliente } from '@src/modules/clientes/_data/data_edit_cliente_fisico'
import { STATUS_ACTIVE } from '@src/app/_data_edit/global_data_standard'

describe('Create Cliente Fisico Entity >> Sucess', () => {
  const sut = makerClienteFisico.newEntity
  const sutNomeCliente = dataEditClienteFisico.fake.nomeClienteFisico
  const sutMsgIdentificator = msgsCliente.isFisico
  const sutFieldPrimeiroNome = byTestersClienteFisico.fieldPrimeiroNome

  const argsRequest = fakeClienteFisicoArgsOne
  const records = recordsDNAParticipant
  const input = { ...argsRequest, records }

  it(`deve criar um objeto da entidade domain Cliente Fisico com campos do sistema e request.`, async () => {
    const action = await sut.execute(input)
    // console.log('BY CLIENTE_FISICO ENTITY >> ', action)

    expect(action).toHaveProperty('id')
    expect(action).toHaveProperty('token', 'one')
    expect(action).toHaveProperty(sutFieldPrimeiroNome, sutNomeCliente)
  })

  it(`deve iniciar como "Desativado" os objetos da entidade.`, async () => {
    const action = await sut.execute(input)
    // console.log('BY CLIENTE_FISICO ENTITY >> ', action)

    const response = action.records.statusActive
    const sutStatusActive = STATUS_ACTIVE.OFF

    expect(response).toEqual(sutStatusActive)
  })

  it(`deve mostrar a identificacao de cliente fisico via propriedade.`, async () => {
    const inputSut = await sut.execute(input)
    // console.log('BY CLIENTE_FISICO ENTITY >> ', inputSut)
    const action = inputSut.msgIdentificator

    const response = `O Cliente de nome ${sutNomeCliente} é ${sutMsgIdentificator}`

    expect(response).toBe(action)
  })

})



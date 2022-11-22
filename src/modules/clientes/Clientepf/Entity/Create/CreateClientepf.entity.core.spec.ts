import { describe, it, expect } from 'vitest'

import { makerCreateClientepf } from '@src/modules/clientes/Clientepf/Makers/MakersClientepf'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { fakeClientePfArgsOne } from '@src/modules/clientes/Clientepf/Data/Fakes/fakeClientePfArgs'
import { varsTestersClientepf, varsClientepf, varsMessagesClientepf } from '@src/modules/clientes/_Variantes/Clientepf.variantes'
import { STATUS_ACTIVE } from '@src/app/_data_edit/global_data_standard'

describe('Create Cliente Fisico Entity >> Sucess', () => {
  const sut = makerCreateClientepf.on
  const sutNomeCliente = varsClientepf.fake.nomeClienteFisico
  const sutMsgIdentificator = varsMessagesClientepf.isFisico
  const sutFieldPrimeiroNome = varsTestersClientepf.fieldPrimeiroNome

  const argsRequest = fakeClientePfArgsOne
  const records = recordsDNAParticipant
  const input = { ...argsRequest, records }

  it(`deve criar um objeto da entidade domain Cliente Fisico com campos do sistema e request.`, async () => {
    const action = await sut.create(input)
    // console.log('BY CLIENTE_FISICO ENTITY >> ', action)

    expect(action).toHaveProperty('id')
    expect(action).toHaveProperty('token', 'one')
    expect(action).toHaveProperty(sutFieldPrimeiroNome, sutNomeCliente)
  })

  it(`deve iniciar como "Desativado" os objetos da entidade.`, async () => {
    const action = await sut.create(input)
    // console.log('BY CLIENTE_FISICO ENTITY >> ', action)

    const response = action.records.statusActive
    const sutStatusActive = STATUS_ACTIVE.OFF

    expect(response).toEqual(sutStatusActive)
  })

  it(`deve mostrar a identificacao de cliente fisico via propriedade.`, async () => {
    const inputSut = await sut.create(input)
    // console.log('BY CLIENTE_FISICO ENTITY >> ', inputSut)
    const action = await inputSut.msgIdentificator

    const response = `O Cliente de nome ${sutNomeCliente} é ${sutMsgIdentificator}`

    expect(response).toBe(action)
  })

})



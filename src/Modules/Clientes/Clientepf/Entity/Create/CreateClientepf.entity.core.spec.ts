import { describe, it, expect } from 'vitest'

import { makerCreateClientepf } from '@src/Modules/Clientes/Clientepf/Makers/MakersClientepf'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { fakeClientePfArgs1, fakeClientePfArgs2 } from '@src/Modules/Clientes/Clientepf/Data/Fakes/fakeClientePfArgs'
import { varsTestersClientepf, varsClientepf, varsMessagesClientepf } from '@src/Modules/Clientes/_Variantes/Clientepf.variantes'
import { STATUS_ACTIVE } from '@src/app/_data_edit/global_data_standard'

describe.todo('Create Cliente Fisico Entity >> Sucess', () => {
  // const sut = makerCreateClientepf.on

  // const sutNomeCliente = varsClientepf.fake1.nomeClienteFisico
  // const sutMsgIdentificator = varsMessagesClientepf.isFisico
  // const sutFieldPrimeiroNome = varsTestersClientepf.fieldPrimeiroNome

  // const argsRequest1 = fakeClientePfArgs1
  // const records1 = recordsDNAParticipant

  // const argsRequest2 = fakeClientePfArgs2
  // const records2 = recordsDNAParticipant

  // const instance1 = { ...argsRequest1, records: records1 }
  // const instance2 = { ...argsRequest2, records2 }

  // it(`deve criar um objeto da entidade domain Cliente Fisico com campos do sistema e request.`, async () => {
  //   const action = await sut.create(instance1)
  //   // console.log('BY CLIENTE_FISICO ENTITY >> ', action)

  //   expect(action).toHaveProperty('id')
  //   expect(action).toHaveProperty('token', 'one')
  //   expect(action).toHaveProperty(sutFieldPrimeiroNome, sutNomeCliente)
  // })

  // it(`deve iniciar como "Desativado" os objetos da entidade.`, async () => {
  //   const action = await sut.create(instance1)
  //   // console.log('BY CLIENTE_FISICO ENTITY >> ', action)

  //   const response = action.records.statusActive
  //   const sutStatusActive = STATUS_ACTIVE.OFF

  //   expect(response).toEqual(sutStatusActive)
  // })

  // it(`deve mostrar a identificacao de cliente fisico via propriedade.`, async () => {
  //   const inputSut = await sut.create(instance1)
  //   // console.log('BY CLIENTE_FISICO ENTITY >> ', inputSut)
  //   const action = await inputSut.msgIdentificator

  //   const response = `O Cliente de nome ${sutNomeCliente} é ${sutMsgIdentificator}`

  //   expect(response).toBe(action)
  // })

  // it.todo(`deve ter o mesmo prototype da entidade as instancias.`, async () => {
  //   const inputSut1 = await sut.create(instance1)
  //   const inputSut2 = await sut.create(instance2)
  //   console.log('BY CLIENTE_FISICO ENTITY 1 >> ', inputSut1)
  //   console.log('BY CLIENTE_FISICO ENTITY 2 >> ', inputSut2)

  //   // const response = (sut.prototype === inputSut1.__proto__)

  //   // expect(response).toBeTruthy()
  // })

})



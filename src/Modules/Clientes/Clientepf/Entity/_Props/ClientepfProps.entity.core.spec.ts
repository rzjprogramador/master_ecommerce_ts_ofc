import { describe, it, expect } from 'vitest'

import { makerClientepfProps } from '@src/Modules/Clientes/Clientepf/Makers/MakersClientepf'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { fakeClientePfArgs1, fakeClientePfArgs2 } from '@src/Modules/Clientes/Clientepf/Data/Fakes/fakeClientePfArgs'
import { varsTestersClientepf, varsClientepf, varsMessagesClientepf } from '@src/Modules/Clientes/_Variantes/Clientepf.variantes'
import { STATUS_ACTIVE } from '@src/app/_data_edit/global_data_standard'

describe('Create Cliente Fisico Entity >> Sucess', () => {
  const sut = makerClientepfProps.on

  const sutNomeCliente = varsClientepf.fake1.nomeClienteFisico
  const sutMsgIdentificator = varsMessagesClientepf.isFisico
  const sutFieldPrimeiroNome = varsTestersClientepf.fieldPrimeiroNome

  const argsRequest1 = fakeClientePfArgs1
  const records1 = recordsDNAParticipant

  const argsRequest2 = fakeClientePfArgs2
  const records2 = recordsDNAParticipant

  const requestInput1 = { ...argsRequest1, records: records1 }
  const requestInput2 = { ...argsRequest2, records2 }

  it(`deve ter o mesmo prototype da entidade as instancias.`, async () => {
    const instance1 = await sut.create(requestInput1)
    const instance2 = await sut.create(requestInput2)
    // console.log('BY CLIENTE_FISICO ENTITY 1 >> ', instance1)
    // console.log('BY CLIENTE_FISICO ENTITY 2 >> ', instance2)

    const responsePrototypeSut = sut.prototype
    const responsePrototypeInstance1 = instance1.prototype

    // console.log( 'RESPOSTA SE TEM O MESMO PROTO ENTIDADE E INSTANCIA1 >> ', responsePrototypeSut === responsePrototypeInstance1 )

    expect(responsePrototypeSut).toEqual(responsePrototypeInstance1)
  })

  it.todo(`deve ter todos os metodos da Entidade a disposicao no prototype das instancias.`, async () => {
    
    const instance1 = await sut.create(requestInput1)
    const instance2 = await sut.create(requestInput2)

    const response = instance1.prototype.getNameCompleted

    expect(response).toBeDefined()

  })

})



import { describe, it, expect } from 'vitest'

import { createClientepf } from '@src/Modules/Clientes/Clientepf/Entity/Create/CreateClientepf.entity'
import { variantesClientepf } from '@src/Modules/Clientes/_Variantes/Clientepf.variantes'


describe('Create ClientePF Entity >> Sucess', () => {
  const sut = createClientepf
  const inputCreateClientepf = variantesClientepf.fakeArgsClientepfOne

  it(`deve criar uma instancia de clientepf com os campos do argRequest + campos gerados pelo sistema.`, async () => {
    const action = await sut(inputCreateClientepf)
    // console.log('INSTANCIA CRIA PELA SUT_ENTIDADE >> ', action)
    const response = action

    expect(response).toHaveProperty('id')
    expect(response).toHaveProperty('nomeCompleto', `${inputCreateClientepf.nome} ${inputCreateClientepf.sobrenome}`)
    expect(response).toHaveProperty('typeCliente', variantesClientepf.typeCliente)
    expect(response).toHaveProperty('records')

  })



})

/*
 const sutNomeCliente = varsClientepf.fake1.nomeClienteFisico
  const sutMsgIdentificator = varsMessagesClientepf.isFisico
  const sutFieldPrimeiroNome = varsTestersClientepf.fieldPrimeiroNome

  const argsRequest1 = fakeClientePfArgs1
  const records1 = recordsDNAParticipant

  const argsRequest2 = fakeClientePfArgs2
  const records2 = recordsDNAParticipant

  const requestInput1 = { ...argsRequest1, records: records1 }
  const requestInput2 = { ...argsRequest2, records2 }

  it.todo(`deve ter o mesmo prototype da entidade as instancias.`, async () => {
    const instance1 = await sut.create(requestInput1)
    const instance2 = await sut.create(requestInput2)

    // TODO : ENCONTRAR JEITO DE TESTAR PROTOTYPE
    // console.log('BY CLIENTE_PF ENTITY 1 >> ', instance1)
    // console.log('BY CLIENTE_PF ENTITY 2 >> ', instance2)

    const responsePrototypeSut = sut.prototype

    // console.log('AS INSTANCIAS TEM O MESMO PROTO >.', instance1.prototype === instance2.prototype)

    // const response = (instance1.prototype === instance2.prototype)
    // expect(response).toBeTruthy()

    expect(true)
  })

  it.todo(`deve ter todos os metodos da Entidade a disposicao no prototype das instancias.`, async () => {

    const instance1 = await sut.create(requestInput1)
    const instance2 = await sut.create(requestInput2)

    // const response = instance1.prototype.getNameCompleted

    // expect(response).toBeDefined()

  })

*/



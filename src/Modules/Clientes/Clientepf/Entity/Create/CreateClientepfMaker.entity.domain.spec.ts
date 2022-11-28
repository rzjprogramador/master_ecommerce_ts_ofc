import { describe, it, expect } from 'vitest'

import { createClientepfMaker } from '@src/Modules/Clientes/Clientepf/Entity/Create/CreateClientepfMaker.entity'
import { clientepfFakeUpdateOne } from '@src/Modules/Clientes/Clientepf/Fallbacks/Fakes/ClientepfFakes'
import { clientepfSeedOne } from '@src/Modules/Clientes/Clientepf/Fallbacks/Seeds/ClientepfSeeds'

const sut = createClientepfMaker

describe('[Sucess] CLIENTE PESSOA FISICA :: [SÓ PELA ENTIDADE] :: CREATE MAKER.', () => {

  it(`deve instancia da entidade deve conter os mesmos "CAMPOS" e nao valores do SeedEntidade.`, async () => {
    const action = await sut(clientepfFakeUpdateOne)
    console.log('INSTANCIA CLIENTEPF CRIADA PELO CREATE MAKER>> ', action)

    expect(action).toHaveProperty('nome')
    expect(action).toHaveProperty('sobrenome')
    expect(action).toHaveProperty('cpf')
    expect(action).toHaveProperty('token')
    expect(action).toHaveProperty('registers')
  })

  it(`[Campos de Sistema] deve conter os campos gerados pelo sistema`, async () => {
    const action = await sut(clientepfFakeUpdateOne)
    // console.log('INSTANCIA CLIENTEPF CRIADA >> ', action)
    expect(action).toHaveProperty('id')
    expect(action).toHaveProperty('registers')
  })

  it(`deve iniciar o statusActive como Desativado.`, async () => {
    const action = await sut(clientepfFakeUpdateOne)
    // const mockStatusOperational: StatusOperational = action.registers.statusActive
    const compare = 'Desativado'
    const response = (action.registers.statusActive === compare)
    expect(response).toBeTruthy()
  })

})

describe('[Fail] CLIENTE PESSOA FISICA :: [SÓ PELA ENTIDADE] :: CREATE MAKER', () => {

  it(`nao deve conter campos nao definidos pela entidade.`, async () => {
    const action = await sut(clientepfFakeUpdateOne)
    // console.log('INSTANCIA CLIENTEPF CRIADA >> ', action)
    expect(action).not.toHaveProperty('foo')
  })


})





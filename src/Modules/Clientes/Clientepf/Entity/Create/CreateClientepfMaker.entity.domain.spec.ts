import { describe, it, expect } from 'vitest'

import { createClientepfMaker } from '@src/Modules/Clientes/Clientepf/Entity/Create/CreateClientepfMaker.entity'
import { clientepfFakeOne } from '@src/Modules/Clientes/Clientepf/Fallbacks/Fakes/ClientepfFakes'
import { clientepfSeedOne } from '@src/Modules/Clientes/Clientepf/Fallbacks/Seeds/ClientepfSeeds'
import { StatusOperational } from '@src/App/Contracts/Registers.contracts'

const sut = createClientepfMaker

describe('[Sucess] CLIENTE PESSOA FISICA :: [SÓ PELA ENTIDADE] :: CREATE MAKER.', () => {

  it(`deve instancia da entidade deve conter os mesmos campos do SeedEntidade.`, async () => {
    const action = await sut(clientepfFakeOne)
    // console.log('INSTANCIA CLIENTEPF CRIADA PELO CREATE MAKER>> ', action)
    expect(action.nome).toEqual(clientepfSeedOne.nome)
    expect(action.sobrenome).toEqual(clientepfSeedOne.sobrenome)
    expect(action.cpf).toEqual(clientepfSeedOne.cpf)
    expect(action.token).toEqual(clientepfSeedOne.token)
    expect(action.registers).toEqual(clientepfSeedOne.registers)
  })

  it(`[Campos de Sistema] deve conter os campos gerados pelo sistema`, async () => {
    const action = await sut(clientepfFakeOne)
    // console.log('INSTANCIA CLIENTEPF CRIADA >> ', action)
    expect(action).toHaveProperty('id')
    expect(action).toHaveProperty('registers')
  })

  it(`deve iniciar o statusActive como Desativado.`, async () => {
    const action = await sut(clientepfFakeOne)
    // const mockStatusOperational: StatusOperational = action.registers.statusActive
    const compare = 'Desativado'
    const response = (action.registers.statusActive === compare)
    expect(response).toBeTruthy()
  })

})

describe('[Fail] CLIENTE PESSOA FISICA :: [SÓ PELA ENTIDADE] :: CREATE MAKER', () => {

  it(`nao deve conter campos nao definidos pela entidade.`, async () => {
    const action = await sut(clientepfFakeOne)
    // console.log('INSTANCIA CLIENTEPF CRIADA >> ', action)
    expect(action).not.toHaveProperty('foo')
  })


})





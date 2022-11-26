import { describe, it, expect } from 'vitest'

import { createClientepfMaker } from '@src/Modules/Clientes/Clientepf/Entity/Create/CreateClientepfMaker.entity'
import { clientepfVariantesOne } from '@src/Modules/Clientes/Clientepf/Data/ClientepfVariantes.variantes'
import { clientepfSeedOne } from '@src/Modules/Clientes/Clientepf/Data/ClientepfSeeds'


describe('CLIENTE PESSOA FISICA :: [SÓ PELA ENTIDADE] :: CREATE MAKER >> Sucess', () => {
  const sut = createClientepfMaker

  it(`deve instancia da entidade deve conter os mesmos campos do SeedEntidade.`, async () => {
    const action = await sut(clientepfVariantesOne.args)
    // console.log('INSTANCIA CLIENTEPF CRIADA PELO CREATE MAKER>> ', action)
    expect(action.nome).toEqual(clientepfSeedOne.nome)
    expect(action.sobrenome).toEqual(clientepfSeedOne.sobrenome)
    expect(action.cpf).toEqual(clientepfSeedOne.cpf)
    expect(action.token).toEqual(clientepfSeedOne.token)
    expect(action.registers).toEqual(clientepfSeedOne.registers)
  })

  it(`[Campos de Sistema] deve conter o campo id.`, async () => {
    const action = await sut(clientepfVariantesOne.args)
    // console.log('INSTANCIA CLIENTEPF CRIADA >> ', action)
    expect(action).toHaveProperty('id')
  })

  it(`deve iniciar o statusActive como Desativado.`, async () => {
    const action = await sut(clientepfVariantesOne.args)
    const compare = 'Desativado'
    const response = (action.registers.statusActive === compare)
    expect(response).toBeTruthy()
  })


})





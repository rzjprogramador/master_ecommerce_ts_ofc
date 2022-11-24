import { describe, it, expect } from 'vitest'

import { createClientepf } from '@src/Modules/Clientes/Clientepf/Entity/Create/CreateClientepf.entity'
import { clientepfVariantesOne, clientepfVariantesTwo } from '@src/Modules/Clientes/Clientepf/Variantes/ClientepfVariantes.variantes.spec'
import { useClienteGlobalPrototype } from '@src/Modules/Clientes/_GlobalClientes/MethodsPrototype/UseClientesGlobalPrototype.prototype'


describe('Create ClientePF Entity >> Sucess', () => {
  const sut = createClientepf
  const inputCreateClientepfOne = clientepfVariantesOne.args
  const inputCreateClientepfTwo = clientepfVariantesTwo.args

  it(`deve criar uma instancia de clientepf com os campos do argRequest + campos gerados pelo sistema.`, async () => {
    const action = await sut(inputCreateClientepfOne)
    const response = action

    // console.log('INSTANCIA CRIA PELA SUT_ENTIDADE >> ', action)
    // console.log('TYPE CLIENTE PF >>', response.typeCliente)

    expect(response).toHaveProperty('id')
    // expect(response).toHaveProperty('nomeCompleto', `${inputCreateClientepfOne.nome} ${inputCreateClientepfOne.sobrenome}`)
    expect(response.typeCliente).toEqual(clientepfVariantesOne.pessoa)
    expect(response).toHaveProperty('records')
  })

  it(`deve comecar as instancias com o statusActive como Desativado.`, async () => {
    const action = await sut(inputCreateClientepfOne)
    const compare = 'Desativado'
    const response = (action.records.statusActive === compare)
    expect(response).toBeTruthy()
  })

  it(`deve no nomeCompleto ser a juncao do nome e sobrenome.`, async () => {
    const action = await sut(inputCreateClientepfOne)
    const compare = `${clientepfVariantesOne.args.nome} ${clientepfVariantesOne.args.sobrenome}`
    // console.log('SOBRENOME ACTION >> ', action.nomeCompleto)
    const response = (action.nomeCompleto === compare)
    expect(response).toBeTruthy()
  })

  it.todo(`deve no nomeCompleto ser a juncao do nome e sobrenome.`, async () => {
    const instanceOne = await sut(inputCreateClientepfOne)
    const instanceTwo = await sut(inputCreateClientepfTwo)
    instanceOne

    const response = useClienteGlobalPrototype.isPrototypeOf(instanceOne) && useClienteGlobalPrototype.isPrototypeOf(instanceTwo)
    console.log('RESPOSTA SE ESTA NO PROTO >>', response)

    expect(response).toBeTruthy()
  })

})





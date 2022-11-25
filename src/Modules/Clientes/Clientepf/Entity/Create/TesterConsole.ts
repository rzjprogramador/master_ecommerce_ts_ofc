import { clientepfVariantesOne, clientepfVariantesTwo } from '@src/Modules/Clientes/Clientepf/Variantes/ClientepfVariantes.variantes'
import { useClienteGlobalPrototype } from '@src/Modules/Clientes/_GlobalClientes/MethodsPrototype/UseClientesGlobalPrototype.prototype'

const instanceOne = clientepfVariantesOne.args
const instanceTwo = clientepfVariantesTwo.args

// instanceTwo

const response = useClienteGlobalPrototype.isPrototypeOf(instanceOne) && useClienteGlobalPrototype.isPrototypeOf(instanceTwo)
console.log('RESPOSTA SE ESTA NO PROTO >>', response)

// TODO ESTA DANDO FALSE

// console.log(instanceOne.getNameCompleted())
import { clientepfVariantesOne, clientepfVariantesTwo } from '@src/Modules/Clientes/Clientepf/Data/ClientepfVariantes.variantes'
import { clientesMethodsProto } from '@src/Modules/Clientes/_GlobalClientes/MethodsProto/ClientesMethodsProto.prototype'

const instanceOne = clientepfVariantesOne.args
const instanceTwo = clientepfVariantesTwo.args

// instanceTwo

const response = clientesMethodsProto.isPrototypeOf(instanceOne) && clientesMethodsProto.isPrototypeOf(instanceTwo)
console.log('RESPOSTA SE ESTA NO PROTO >>', response)

// TODO ESTA DANDO FALSE

// console.log(instanceOne.getNameCompleted())
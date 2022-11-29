import { clientepfDataOne, clientepfDataTwo } from '@src/Modules/Clientes/Clientepf/Data/ClientepfDVariantes.variantes'
import { clientesMethodsProto } from '@src/Modules/Clientes/_AllClientes/MethodsProto/ClientesMethodsProto.prototype'

const instanceOne = clientepfDataOne.args
const instanceTwo = clientepfDataTwo.args

// instanceTwo

const response = clientesMethodsProto.isPrototypeOf(instanceOne) && clientesMethodsProto.isPrototypeOf(instanceTwo)
console.log('RESPOSTA SE ESTA NO PROTO >>', response)

// TODO ESTA DANDO FALSE

// console.log(instanceOne.getNameCompleted())
import { TypeCliente } from '@src/Modules/Clientes/_AllClientes/Contracts/AllClientesContract'


type AllClientesFallbacks = {
    typeCliente: TypeCliente
}

export const clientesDataGlobal: AllClientesFallbacks = {
    typeCliente: 'None'
}

import { dataEditClienteFisico } from '@src/modules/clientes/_data_edit/data_edit_cliente_fisico'
import { ArgsCreateClienteFisico } from '@src/modules/clientes/_data_edit/contracts_clientes/cliente_fisico.contracts'

export const fakeClienteFisicoArgsOne: ArgsCreateClienteFisico = {
    nomeCliente: dataEditClienteFisico.fake.nomeClienteFisico,
    token: dataEditClienteFisico.fake.tokenOne
}
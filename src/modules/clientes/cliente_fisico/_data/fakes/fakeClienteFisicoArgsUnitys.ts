import { dataEditClienteFisico } from '@src/modules/clientes/_data/data_edit_cliente_fisico'
import { ArgsCreateClienteFisico } from '@src/modules/clientes/_data/contracts_clientes/cliente_fisico.contracts'

export const fakeClienteFisicoArgsOne: ArgsCreateClienteFisico = {
    primeiroNome: dataEditClienteFisico.fake.nomeClienteFisico,
    sobrenome: dataEditClienteFisico.fake.sobrenome,
    token: dataEditClienteFisico.fake.tokenOne,
    cpf: dataEditClienteFisico.fake.cpf
}
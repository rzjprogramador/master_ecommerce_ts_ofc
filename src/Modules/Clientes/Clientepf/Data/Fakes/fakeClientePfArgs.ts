import { varsClientepf } from '@src/Modules/Clientes/_Variantes/Clientepf.variantes'
import { ArgsCreateClientepf } from '@src/Modules/Clientes/Contracts/Clientepf.contract'

export const fakeClientePfArgsOne: ArgsCreateClientepf = {
    primeiroNome: varsClientepf.fake.nomeClienteFisico,
    sobrenome: varsClientepf.fake.sobrenome,
    token: varsClientepf.fake.tokenOne,
    cpf: varsClientepf.fake.cpf
}
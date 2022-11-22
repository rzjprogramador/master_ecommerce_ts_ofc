import { varsClientepf } from '@src/modules/clientes/_Variantes/Clientepf.variantes'
import { ArgsCreateClientepf } from '@src/modules/clientes/Contracts/Clientepf.contract'

export const fakeClientePfArgsOne: ArgsCreateClientepf = {
    primeiroNome: varsClientepf.fake.nomeClienteFisico,
    sobrenome: varsClientepf.fake.sobrenome,
    token: varsClientepf.fake.tokenOne,
    cpf: varsClientepf.fake.cpf
}
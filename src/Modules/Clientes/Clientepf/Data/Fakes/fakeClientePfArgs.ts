import { varsClientepf } from '@src/Modules/Clientes/_Variantes/Clientepf.variantes'
import { ArgsCreateClientepf } from '@src/Modules/Clientes/Contracts/Clientepf.contract'

export const fakeClientePfArgs1: ArgsCreateClientepf = {
    primeiroNome: varsClientepf.fake1.nomeClienteFisico,
    sobrenome: varsClientepf.fake1.sobrenome,
    token: varsClientepf.fake1.tokenOne,
    cpf: varsClientepf.fake1.cpf
}

export const fakeClientePfArgs2: ArgsCreateClientepf = {
    primeiroNome: varsClientepf.fake2.nomeClienteFisico,
    sobrenome: varsClientepf.fake2.sobrenome,
    token: varsClientepf.fake2.tokenOne,
    cpf: varsClientepf.fake2.cpf
}
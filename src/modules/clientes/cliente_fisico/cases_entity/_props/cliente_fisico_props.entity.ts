import { generateID } from "@src/app/helpers/generators/records_generators"
import { ClientesProtocol } from '@src/modules/clientes/_data/contracts_clientes/clientes_all.contracts'
import { PropsClienteFisico } from '@src/modules/clientes/_data/contracts_clientes/cliente_fisico.contracts'
import { msgsCliente } from '@src/modules/clientes/_data/data_edit_cliente_fisico'

export class ClienteFisicoProps implements PropsClienteFisico, ClientesProtocol {
    public readonly id: string
    public primeiroNome: string
    public sobrenome: string
    public cpf: string
    public nomeCompleto: string
    public msgIdentificator: string
    public token: string

    constructor() {
        this.id = this.id ?? generateID()
    }

    getNameCompleted() {
        return `${this.primeiroNome} ${this.sobrenome}`
    }

    getIdentificator() {
        return `O Cliente de nome ${this.primeiroNome} é ${msgsCliente.isFisico}`
    }

}
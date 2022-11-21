import { generateID } from "@src/app/helpers/generators/records_generators"
import { PropsClienteFisico } from '@src/modules/clientes/_data_edit/contracts_clientes/cliente_fisico.contracts'


export class ClienteFisicoProps implements PropsClienteFisico {
    public readonly id: string
    public nomeCliente: string
    public token: string

    constructor() {
        this.id = this.id ?? generateID()
    }

}
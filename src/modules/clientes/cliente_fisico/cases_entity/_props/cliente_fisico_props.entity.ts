import { generateID } from "@src/app/helpers/generators/records_generators"
import { PropsClienteFisico } from '../../../_data_edit/contracts_clientes/cliente_fisico.contracts'


export class ClienteFisicoProps implements PropsClienteFisico {
    public nomeCliente: string
    public id: string
    public token: string

    constructor() {
        if (!this.id) { this.id = generateID() }
    }

}
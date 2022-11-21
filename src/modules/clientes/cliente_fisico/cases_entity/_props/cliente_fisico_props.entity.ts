import { generateID } from "@src/app/helpers/generators/records_generators"
import { PropsClienteFisico } from './cliente_fisico.contracts'


export class ClienteFisicoProps {
    protected nomeCliente: string
    protected id: string
    protected token: string

    constructor() {
        if (!this.id) { this.id = generateID() }
    }

}
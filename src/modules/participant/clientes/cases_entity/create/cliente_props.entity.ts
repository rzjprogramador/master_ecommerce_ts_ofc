import { generateID } from "@src/app/helpers/generators/records_generators"


export class ClienteProps {
    protected nomeCliente: string
    protected id: string
    protected token: string

    constructor() {
        if (!this.id) { this.id = generateID() }
    }

}
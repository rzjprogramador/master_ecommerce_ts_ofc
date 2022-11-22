
export interface ClientesProtocol {
    getNameCompleted(): Promise<string>
    getIdentificator(): Promise<string>
}


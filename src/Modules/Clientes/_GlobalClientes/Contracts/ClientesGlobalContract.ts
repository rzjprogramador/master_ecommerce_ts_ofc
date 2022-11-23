export type TypeCliente = 'None' | 'Pessoa Fisica' | 'Pessoa Juridica'

export interface UseClienteGlobalPrototype {
    nome?: string
    sobrenome?: string
    pessoa?: TypeCliente
    getNameCompleted(): Promise<string>
    getIdentificator(): Promise<string>
}


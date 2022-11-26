export type TypeCliente = 'None' | 'Pessoa Fisica' | 'Pessoa Juridica'

export interface ClientesMethodsProto {
    nome?: string
    sobrenome?: string
    pessoa?: TypeCliente
    getNomeCompleto(): Promise<string>
    getIdentificador(): Promise<TypeCliente>
}


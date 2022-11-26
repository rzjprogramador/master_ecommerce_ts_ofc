export interface RegistersProduct {
    createdAt: Date | string
    updatedAt: Date | string
    removedAt: Date | string
    statusActive: StatusActive | string
}

export interface RegistersParticipant {
    createdAt: Date | string
    updatedAt: Date | string
    removedAt: Date | string
    statusActive: StatusActive | string
}

export type StatusActive = {
    OFF: 'Desativado'
    ON: 'Ativo'
}
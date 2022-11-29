export interface RegistersProduct {
    createdAt: Date | string
    updatedAt: Date | string
    removedAt: Date | string
    statusActive: StatusOperational | string
}

export interface RegistersParticipant {
    createdAt: Date | string
    updatedAt: Date | string
    removedAt: Date | string
    statusActive: StatusOperational | string
}

export type StatusOperational = {
    OFF: 'Desativado'
    ON: 'Ativo'
}
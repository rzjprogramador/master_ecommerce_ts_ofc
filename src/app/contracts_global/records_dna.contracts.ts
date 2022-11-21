export interface RecordsDNAProduct {
    createdAt: Date | string
    updatedAt: Date | string
    removedAt: Date | string
    statusActive: StatusActive | string
}

export interface RecordsDNAParticipant {
    createdAt: Date | string
    updatedAt: Date | string
    removedAt: Date | string
    statusActive: StatusActive | string
}

export type StatusActive = {
    DESABLED: 'Desativado'
    ACTIVE: 'Ativo'
}
// type DESABLED = 'Desativado'
// type ACTIVE = 'Ativo'
import { RecordsDNAParticipant } from '@src/app/contracts_global/records_dna.contracts'
import { generateDateCreateAt, generateDateUpdateAt, generateRemovedAt } from "@src/app/helpers/generators/records_generators"

export const recordsDNAParticipant: RecordsDNAParticipant = {
    createdAt: generateDateCreateAt(),
    updatedAt: generateDateUpdateAt(),
    removedAt: generateRemovedAt(),
    statusActive: 'Desabilitado'
}
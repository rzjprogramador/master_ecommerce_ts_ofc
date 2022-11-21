import { RecordsDNAParticipant } from '@src/app/contracts_global/records_dna.contracts'
import { generateDateCreateAt, generateDateUpdateAt, generateRemovedAt } from "@src/app/helpers/generators/records_generators"
import { STATUS_ACTIVE } from '@src/app/helpers/_data_global/global_data_standard/global_data_standard'

export const recordsDNAParticipant: RecordsDNAParticipant = {
    createdAt: generateDateCreateAt(),
    updatedAt: generateDateUpdateAt(),
    removedAt: generateRemovedAt(),
    statusActive: STATUS_ACTIVE.DESABLED
}
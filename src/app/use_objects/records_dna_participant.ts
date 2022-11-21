import { RecordsDNAParticipant } from '@src/app/contracts/records_dna.contracts'
import { generateDateCreateAt, generateDateUpdateAt, generateRemovedAt } from "@src/app/helpers/generators/records_generators"
import { STATUS_ACTIVE } from '@src/app/_data_edit/global_data_standard'

export const recordsDNAParticipant: RecordsDNAParticipant = {
    createdAt: generateDateCreateAt(),
    updatedAt: generateDateUpdateAt(),
    removedAt: generateRemovedAt(),
    statusActive: STATUS_ACTIVE.OFF
}
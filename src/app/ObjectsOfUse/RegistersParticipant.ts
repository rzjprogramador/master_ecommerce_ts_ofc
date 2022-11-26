import { RegistersParticipant } from '@src/app/Contracts/Registers.contracts'
import { generateDateCreateAt, generateDateUpdateAt, generateRemovedAt } from "@src/app/Helpers/generators/records_generators"
import { STATUS_ACTIVE } from '@src/app/Data/global_data_standard'

export const registersParticipant: RegistersParticipant = {
    createdAt: generateDateCreateAt(),
    updatedAt: generateDateUpdateAt(),
    removedAt: generateRemovedAt(),
    statusActive: STATUS_ACTIVE.OFF
}
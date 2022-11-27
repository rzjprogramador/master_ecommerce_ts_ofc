import { RegistersParticipant } from '@src/App/Contracts/Registers.contracts'
import { generateDateCreateAt, generateDateUpdateAt, generateRemovedAt } from "@src/App/Helpers/generators/records_generators"
import { objStatusOperational } from '@src/App/Fallbacks/GlobalAppFakes'

export const registersParticipant: RegistersParticipant = {
    createdAt: generateDateCreateAt(),
    updatedAt: generateDateUpdateAt(),
    removedAt: generateRemovedAt(),
    statusActive: objStatusOperational.OFF
}
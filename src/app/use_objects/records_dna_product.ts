import { RecordsDNAProduct } from '@src/app/contracts/records_dna.contracts'
import { generateDateCreateAt, generateDateUpdateAt, generateRemovedAt } from "@src/app/helpers/generators/records_generators"

export const recordsDNAProduct: RecordsDNAProduct = {
    createdAt: generateDateCreateAt(),
    updatedAt: generateDateUpdateAt(),
    removedAt: generateRemovedAt(),
    statusActive: 'Ativo'
}
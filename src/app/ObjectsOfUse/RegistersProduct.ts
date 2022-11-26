import { RegistersProduct } from '@src/app/Contracts/Registers.contracts'
import { generateDateCreateAt, generateDateUpdateAt, generateRemovedAt } from "@src/app/Helpers/generators/records_generators"

export const recordsDNAProduct: RegistersProduct = {
    createdAt: generateDateCreateAt(),
    updatedAt: generateDateUpdateAt(),
    removedAt: generateRemovedAt(),
    statusActive: 'Ativo'
}
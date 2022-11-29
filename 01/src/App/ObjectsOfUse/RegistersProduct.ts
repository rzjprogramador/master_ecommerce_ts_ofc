import { RegistersProduct } from '@src/App/Contracts/Registers.contracts'
import { generateDateCreateAt, generateDateUpdateAt, generateRemovedAt } from "@src/App/Helpers/generators/records_generators"

export const recordsDNAProduct: RegistersProduct = {
    createdAt: generateDateCreateAt(),
    updatedAt: generateDateUpdateAt(),
    removedAt: generateRemovedAt(),
    statusActive: 'Ativo'
}
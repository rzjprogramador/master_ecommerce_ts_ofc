// export interface ArgsPerformPercentage {
//     horaPedido: number
//     horarioLimite: number
//     inputRequest: number
//     percentage?: number
//     valorFinalComDesconto?: number
// }

// export type ResponsePerformPercentage = ArgsPerformPercentage | any

export type PerformPercentageType = (input: number, percentage: number) => Promise<number>

export const performDiscountPercentage: PerformPercentageType = async (input, percentage = 0) => {
    const formula = await input - ((input * percentage) / 100)
    return await formula
}
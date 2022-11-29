
export const methodsMathApp = {
    async convertCurrencyBR(value: number): Promise<number> {
        return await +(value.toFixed(2))
    },

    async addPercentage(porcentage: number, valueRequest: number): Promise<number> {
        const valorInicial = valueRequest
        const formulaPorcentagem = porcentage / 100
        const result = await +(valorInicial - formulaPorcentagem)
        return await this.convertCurrencyBR(result)
    },

}
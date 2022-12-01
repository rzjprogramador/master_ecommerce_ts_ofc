import { PropsUserMethodsProto } from '@src/Modules/User/_Core/Contracts/UserContracts'


export const userMethodsProto: PropsUserMethodsProto = {
	async getNomeCompleto() {
		return await `${this.primeiroNome} ${this.complementoNome}`
	},

	async getPropsUserDefault(cpf = this.cpf) {
		return await {
			cpf,
		}
	},
}
